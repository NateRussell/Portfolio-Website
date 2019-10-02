import { Component, OnInit, HostListener } from '@angular/core';
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
        backgroundColor: 'rgba(24, 24, 24, 0)',
        borderBottom: '2px solid rgba(24, 24, 24, 0)'
      })
      ),
      state('false', style({
        backgroundColor: 'rgba(24, 24, 24, .95)',
        borderBottom: '2px solid  #282828'
      })
      ),
      transition('true <=> false', [
        animate('.4s')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  scrollTop: boolean = true;

  constructor() {
  }

  ngOnInit() {
    
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
