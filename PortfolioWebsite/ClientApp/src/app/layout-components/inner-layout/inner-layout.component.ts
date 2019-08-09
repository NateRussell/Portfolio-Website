import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-layout',
  templateUrl: './inner-layout.component.html',
  styleUrls: ['./inner-layout.component.less']
})

export class InnerLayoutComponent implements OnInit {

  @Input() headerTopAdjustment: boolean = true;
  
  fallbackHeaderAdjustment: string = '4.2em';

  topPadding: string = '10px'; //used as trigger to coordinate new page elements to animate in

  private pageReady: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.headerTopAdjustment) {
      this.adjustTopPadding();
    }

    setTimeout(() => { //wait until old outlet has faded away
      window.scrollTo({ top: 0 }); //reset scroll bar to top of page
      this.pageReady = true; //trigger animation new page elements to animate in
    }, 600);
  }



  private adjustTopPadding(): void {

    let adjustmentHeight: string = this.fallbackHeaderAdjustment; //default to the fallback adjustment value

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
