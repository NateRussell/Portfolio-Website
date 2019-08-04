import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
} from '@angular/animations';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  animations: [
    trigger('fadeInOut', [
      state('true', style({ maxWidth: '3.5em' })),
      state('false', style({ maxWidth: '0em' })),
      transition('true => false', [
        animate('.2s')
      ]),
      transition('false => true', [
        animate('.2s .4s')
      ])
    ])
  ],
  styleUrls: ['./connect.component.less']
})
export class ConnectComponent implements OnInit {

  @HostBinding('@fadeInOut') get fadeInOut(): boolean {
    return this.show;
  }

  @Input() show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
