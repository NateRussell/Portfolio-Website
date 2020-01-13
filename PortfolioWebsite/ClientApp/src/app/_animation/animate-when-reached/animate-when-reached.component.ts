import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ViewportService } from 'src/app/_services/viewport.service';
import { leftSlideInAnimation } from '../../_animation/content-enter-animations';

@Component({
  selector: 'animate-when-reached',
  templateUrl: './animate-when-reached.component.html',
  styleUrls: ['./animate-when-reached.component.less'],
  animations: [leftSlideInAnimation]
})
export class AnimateWhenReachedComponent implements OnInit {

  private _elementReached: boolean = false;
  private _ready: boolean = false;
  @ViewChild('content', { static: true }) _contentElement: ElementRef;

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.checkVisible();
  }

  private checkVisible(): void {
    if (this._ready) {
      this._elementReached = this._elementReached || this.viewportService.elementReached(this._contentElement.nativeElement);
    }
  }

  constructor(private viewportService: ViewportService) {}


  ngOnInit() {
    this.viewportService.onPageReady.subscribe(() => {
      setTimeout(() => { //wait until old outlet has faded away
        this._ready = true;
        this.checkVisible();
      }, 100)
    })

  }

}
