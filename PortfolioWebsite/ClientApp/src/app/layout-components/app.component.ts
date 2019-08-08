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
import { Router } from '@angular/router';

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
        animate('.4s')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  scrollTop: boolean = true;

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    /*this.router.events.subscribe(() =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',

      })
    );
    */
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
