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
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less'],
  animations: [
    trigger('openClose', [
      state('true',
        style({
          width: '15em',
        })
      ),
      state('false',
        style({
          width: '0',
        }),
      ),
      transition('true => false', [
        group([
          query('#side-menu', [
            animate('.4s', style({ opacity: 0 }))
          ]),
          animate('.4s'),
        ])
      ]),
      transition('false => true', [
        query('#side-menu',[
          style({ opacity: 0 })
        ]),
        group([
          animate('.4s'),
          query('#side-menu', [
            animate('.4s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class SideBarComponent implements OnInit {

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
