import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  group,
  transition,
  query,
  sequence
} from '@angular/animations';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.less'],
  animations: [
    trigger('openClose', [
      state('true',
        style({ width: '15em' })
      ),
      state('false',
        style({ width: '0' }),
      ),
      transition('true => false', [
        group([
          query('#side-navigation-items', [
            animate('.35s', style({ opacity: 0 }))
          ]),
          animate('.35s', style({ width: 0 })),
        ])
      ]),
      transition('false => true', [
        query('#side-navigation-items',[
          style({ opacity: 0 })
        ]),
        group([
          animate('.35s', style({ width: '15em' })),
          query('#side-navigation-items', [
            animate('.35s', style({ opacity: 1 }))
          ]),
        ])
      ])
    ])
  ]
})
export class SideNavigationComponent implements OnInit {

  private isOpen: boolean = false;

  @HostBinding('@openClose') get openClose() :boolean {
    return this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  open(): void {
    this.isOpen = true;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
