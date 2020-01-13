import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../_animation/content-enter-animations';
import { debug } from 'util';
import { ViewportService } from 'src/app/_services/viewport.service';

@Component({
  selector: 'app-inner-layout',
  templateUrl: './inner-layout.component.html',
  styleUrls: ['./inner-layout.component.less'],
  animations: [fadeInAnimation]
})

export class InnerLayoutComponent implements OnInit {

  private topPadding: string = '10px';

  constructor(private viewportService: ViewportService) {
    
  }

  ngOnInit() {
    this.adjustTopPadding();
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
}
