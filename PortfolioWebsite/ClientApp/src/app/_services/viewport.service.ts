import { Injectable} from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { observable, Observable, fromEvent, Subscription, combineLatest, Subscriber } from 'rxjs';
import { filter, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  private _pageReadyObervable: Observable<void> = null;

  constructor(private router: Router) {

    console.log("VS initialized");

    this._pageReadyObervable = new Observable<void>((readyObs) => {
      

      console.log('new obs created');

      router.events
        .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd && event.id !== undefined),
        )
        .subscribe((event: RouterEvent) => { //fires every time a route change occurs

          let pageDelaySubscripton: Subscription = null;
          let pageReadySubscription: Subscription = null;

          console.log("route changed" + event.url + " - even id: " + event.id);

          this._pageReady = false;
          this._delayComplete = false;

          if (pageDelaySubscripton != null) {
            pageDelaySubscripton.unsubscribe();
            console.log("Delay subscription canceled.");
          }
          if (pageReadySubscription != null) {
            pageReadySubscription.unsubscribe();
            console.log("Page ready subscription canceled.");
          }
          

          let pageDelayObservable: Observable<void> = new Observable<void>((delayObs) => {
            const OUTLET_EXIT_DELAY: number = 600;
            setTimeout(() => { //wait until old outlet has faded away
              delayObs.complete();
            }, OUTLET_EXIT_DELAY);
          })

          pageDelaySubscripton = pageDelayObservable.subscribe(null, null, () => {
            this._delayComplete = true;
            console.log("Delay complete.");

            let imagesLoadedObservable: Observable<HTMLImageElement[]> = this.waitForImages();
            pageReadySubscription = imagesLoadedObservable.subscribe(null, null, () => readyObs.next());
          });

          
        });
    }).pipe(share());

    this._pageReadyObervable.subscribe(() => { this._pageReady = true; console.log("Page ready."); });

    fromEvent(window, 'scroll').subscribe(() => {
      this._scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
    });
  }

  get onPageReady(): Observable<void> {
    return this._pageReadyObervable;
  }

  private _onscroll: Observable<Event> = fromEvent(window, 'scroll');
  get onScroll(): Observable<Event> {
    return this._onscroll;
  }

  private _pageReady: boolean;
  get pageReady(): boolean {
    return this._pageReady;
  }

  get pageLoading(): boolean {
    return this._delayComplete && !this._pageReady;
  }

  private _delayComplete: boolean;
  get delayComplete(): boolean {
    return this._delayComplete;
  }

  private _scrollTop: number = 0;
  get scrollTop(): number {
    return this._scrollTop;
  }

  get scrollBottom(): number {
    return this.scrollTop + this.viewportHeight;
  }

  get viewportHeight(): number {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  get pageHeight(): number {
    return document.getElementById('outlet-wrapper').scrollHeight;
  }

  get scrolledToTop(): boolean {
    return (this.scrollTop === 0);
  }

  get scrolledToBottom(): boolean {
    let output: boolean = (this.scrollBottom >= this.pageHeight)
    return output;
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }

  public elementReached(element: HTMLElement, viewportRatio: number = .75): boolean {
    let viewportHeight: number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let pageBottomReached: boolean = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    return (element.getBoundingClientRect().top < viewportHeight * viewportRatio || this.scrolledToBottom);
  }

  public waitForImages(): Observable<HTMLImageElement[]> {
    let images: HTMLCollectionOf<HTMLImageElement> = document.images; //collection of all images on the page
    let imageLoadObservables: Observable<HTMLImageElement>[] = [];

    console.log("Creating (" + images.length + ") image load observables.");
    let imageLoadedCount: number = 0;
    for (let i = 0; i < images.length; i++) { //for each image
      let imageLoadObservable: Observable<HTMLImageElement> = new Observable<HTMLImageElement>((obs: Subscriber<HTMLImageElement>) => { //create a new promise
        if (images.item(i).src.endsWith('LoadBar.gif')) { //if the image is the load bar, resolve it so that you don't run into situations where the user is waiting to only load the load bar.
          obs.complete();
        }
        else {
          images.item(i).onload = () => { obs.complete(); }; //resolve the observable when the image loads
          images.item(i).onerror = () => { obs.complete(); }; //resolve observable when the image fails to load
          if (images.item(i).complete) { //resolve observable  if image has already loaded
            obs.complete();
          }
        }
      }).pipe(share());

      imageLoadObservables.push(imageLoadObservable);
      imageLoadObservable.subscribe((image: HTMLImageElement) => { console.log("Image loading - " + image.src) }, null, () => { imageLoadedCount++; console.log("Image loaded: " + imageLoadedCount); });
    }

    return combineLatest(imageLoadObservables).pipe(share());
  }
}
