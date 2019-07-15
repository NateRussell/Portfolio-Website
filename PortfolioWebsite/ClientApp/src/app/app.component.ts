import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  animateChild,
  query
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter', [
          style({
            opacity: 0,
            display: 'inherit'
          }),
          animate('.35s', style({ opacity: 1 })),
          animateChild()
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  constructor() {
    
  }

  ngOnInit() {

  }
}
