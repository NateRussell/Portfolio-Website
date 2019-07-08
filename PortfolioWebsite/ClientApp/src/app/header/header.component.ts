import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() openMenuEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  openMenu() {
    this.openMenuEvent.emit(null);
  }

  ngOnInit() {
  }

}
