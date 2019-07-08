import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.less'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '15em'
      })),
      state('closed', style({
        width: '0'
      })),
      transition('open => closed', [
        animate('.35s')
      ]),
      transition('closed => open', [
        animate('.35s')
      ]),
    ])
  ]
})
export class SideNavigationComponent implements OnInit {

  private state :'opened' | 'closed' = 'closed';

  @HostBinding('@openClose') get openClose() :string {
    return this.state === 'opened' ? 'open' : 'closed';
  }

  close(): void {
    this.state = 'closed'
  }

  open(): void {
    this.state = 'opened'
  }

  toggle(): void {
    if (this.state === 'opened') {
      this.state = 'closed'
    }
    else {
      this.state = 'opened'
    }
  }

  isOpen(): boolean {
    if (this.state === 'opened') {
      return true;
    }
    else {
      return false;
    }
  }

  isClosed(): boolean {
    return !this.isOpen();
  }

  constructor() { }

  ngOnInit() {
  }

}
