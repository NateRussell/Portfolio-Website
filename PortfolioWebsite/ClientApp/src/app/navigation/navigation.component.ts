import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  @Output() openMenuEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  openMenu(): void {
    this.openMenuEvent.emit(null);
  }

}
