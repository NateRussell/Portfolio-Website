import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../page-components/content-enter-animations';
import { debug } from 'util';

@Component({
  selector: 'app-inner-layout',
  templateUrl: './inner-layout.component.html',
  styleUrls: ['./inner-layout.component.less'],
  animations: [fadeInAnimation]
})

export class InnerLayoutComponent implements OnInit {

  public pageReady: boolean = false; //used as trigger to coordinate new page elements to enter the page
  private topPadding: string = '10px';
  imagesLoaded: boolean = false;
  loadBarReady: boolean = false;

  //@HostBinding('style.opacity') public hostOpacity: string = '0';
  contentElement: HTMLElement = null;

  constructor() { }

  ngOnInit() {
    this.adjustTopPadding();

    this.contentElement = document.getElementById('content');
    if (this.contentElement != null) {
      this.contentElement.style.opacity = '0';
    }

    const DELAY: number = 600;
    setTimeout(() => { //wait until old outlet has faded away
      this.waitForImages(() => this.setPage(this));
      this.loadBarReady = true;
    }, DELAY);
  }

  private setPage(component: InnerLayoutComponent): void {
    window.scrollTo({ top: 0 }); //reset scroll bar to top of page

    if (this.contentElement != null) {
      this.contentElement.style.opacity = '1';
    }

    component.pageReady = true; //trigger animation new page elements to animate in
  }

  private adjustTopPadding(): void {

    let adjustmentHeight: string = '4.2em'; //fallback adjustment value

    let headerElement: HTMLElement = document.getElementById('header'); //get header element
    if (headerElement != null) { //if header element exists
      adjustmentHeight = headerElement.clientHeight.toString() + 'px'; //use the header height as the adjustment height
    }

    let contentElement: HTMLElement = document.getElementById('content'); //get the content element
    if (contentElement != null) { //if the content element exists
      let totalTopPadding: string = `calc(${adjustmentHeight} + ${this.topPadding})`; //calculate the total top padding value by adding the adjustment height to the top padding height
      contentElement.style.paddingTop = totalTopPadding; //set the content element's top padding value to the calculated total top padding value
    }
  }

  private waitForImages(callback: Function): void {
    let images: HTMLCollectionOf<HTMLImageElement> = document.images; //collection of all images on the page
    let imageLoadPromises: Promise<boolean>[] = [];

    for (let i = 0; i < images.length; i++) { //for each image
      let promise: Promise<boolean> = new Promise<boolean>((resolve) => { //create a new promise
        images.item(i).onload = () => resolve(true); //resolve the promise when the image loads
        images.item(i).onerror = () => resolve(false); //resolve promise when the image fails to load
        if (images.item(i).complete) { //resolve promise if image has already loaded
          resolve(true);
        }
      });
      imageLoadPromises.push(promise);
    }

    Promise.all(imageLoadPromises).then(() => { //once all images promises have resolved due to loading or failing to load
      this.imagesLoaded = true;
      callback(); //trigger the callback
    })
  }

}
