import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  @Output() closeMenuEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.closeMenuEvent.emit(null);
  }

}
