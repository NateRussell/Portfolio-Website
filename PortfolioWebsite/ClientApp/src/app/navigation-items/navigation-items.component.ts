import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.less']
})
export class NavigationItemsComponent implements OnInit {

  @Output() closeMenuEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.closeMenuEvent.emit(null);
  }

}
