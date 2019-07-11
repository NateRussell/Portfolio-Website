import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: '.75', display: 'initial' })),
      state('out', style({ opacity: '0', display: 'none' })),
      transition('in <=> out', [
        style({ display: 'initial' }),
        animate('.35s')
      ])
    ])
  ]
})
export class OverlayComponent implements OnInit {

  @HostBinding('@fadeInOut') get fadeInOut(): string {
    return this.state;
  }

  @Input() state: 'in' | 'out' = 'out';

  constructor() {

  }

  ngOnInit() {
    
  }

}
