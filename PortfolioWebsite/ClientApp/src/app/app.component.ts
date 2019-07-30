import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { routeTransitionAnimation } from './route-transition-animation';
import {
  trigger,
  style,
  animate,
  transition,
  animateChild,
  query,
  state,
  group,

  sequence
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    routeTransitionAnimation,
    trigger('shiftLeft', [
      state('true', style({
          left: '-15em'
        })
      ),
      state('false', style({
          left: 0
        })
      ),
      transition('true <=> false', [
        group([
          query('@*', [animateChild()], { optional: true }),
          animate('.4s'),
        ])
      ])
    ]),
    trigger('headerFade', [
      state('true', style({
        backgroundColor: 'rgba(0, 0, 0, 0)'
      })
      ),
      state('false', style({
        backgroundColor: 'rgba(0,0,0, .8)'
      })
      ),
      transition('true <=> false', [
        animate('.2s')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  scrollTop: boolean = true;

  constructor(public el: ElementRef) {
    
  }

  ngOnInit() {
    this.scrollTop 
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if ((window.scrollY || document.documentElement.scrollTop) <= 0) {
      this.scrollTop = true;
    } else {
      this.scrollTop = false;
    }
  }
}
