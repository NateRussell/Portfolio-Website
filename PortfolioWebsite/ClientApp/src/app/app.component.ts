import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
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
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            right: 0
          })
        ], { optional: true }),
        query(':enter',
          [
            style({
              
              opacity: 0
            })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.4s', style({
              opacity: 0,
              display: 'none'
            }))
          ],
          { optional: true }
        )
        /*
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.2s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
        */
      ])
    ]),
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
    ]),
    trigger('footerFade', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('.4s', style({ opacity: 0 }))
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
