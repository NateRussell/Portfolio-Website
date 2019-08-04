import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: '../navigation/navigation.component.html',
  styleUrls: ['./side-navigation.component.less']
})
export class SideNavigationComponent implements OnInit {

  @Output() closeMenuEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.closeMenuEvent.emit(null);
  }

}
