import { Component, OnInit } from '@angular/core';
import { rightSlideInAnimation } from '../content-enter-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  animations: [rightSlideInAnimation]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
