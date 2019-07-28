import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
} from '@angular/animations';
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less'],
  animations: [
    trigger('fadeInOut', [
      state('true', style({ opacity: '.75', display: 'initial' })),
      state('false', style({ opacity: '0', display: 'none' })),
      transition('true <=> false', [
        sequence([
          style({ display: 'initial' }),
          animate('.4s')
        ])
      ]),
    ])
  ]
})
export class OverlayComponent implements OnInit {

  @HostBinding('@fadeInOut') get fadeInOut(): boolean {
    return this.show;
  }

  @Input() show: boolean = false;

  constructor() {

  }

  ngOnInit() {
    
  }

}
