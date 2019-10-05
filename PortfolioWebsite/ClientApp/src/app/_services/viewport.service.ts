import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {

  constructor() {
    window.addEventListener('scroll', () => {
      this._scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
    });
  }

  _scrollTop: number = 0;
  get scrollTop(): number {
    return (this._scrollTop);
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
    return (this.scrollTop <= 0);
  }

  get scrolledToBottom(): boolean {
    let output: boolean = (this.scrollBottom >= this.pageHeight)
    console.log(this.scrollBottom)
    return output;
    
  }

  public elementReached(element: HTMLElement, viewportRatio: number = .75): boolean {
    let viewportHeight: number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let pageBottomReached: boolean = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    return (element.getBoundingClientRect().top < viewportHeight * viewportRatio || this.scrolledToBottom);
  }

  public getScrollPosition
}
