import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() openMenuEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  openMenu() {
    this.openMenuEvent.emit(null);
  }

  ngOnInit() {
  }

}
