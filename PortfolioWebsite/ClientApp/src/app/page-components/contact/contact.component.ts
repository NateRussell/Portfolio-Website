import { Component, OnInit } from '@angular/core';
import { leftSlideInAnimation } from '../content-enter-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
  animations: [leftSlideInAnimation]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
