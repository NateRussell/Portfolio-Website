import { Component, OnInit } from '@angular/core';
import { leftSlideInAnimation } from '../../_animation/content-enter-animations';
import { ViewportService } from 'src/app/_services/viewport.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
  animations: [leftSlideInAnimation]
})
export class ContactComponent implements OnInit {

  constructor(private viewportService: ViewportService) { }

  ngOnInit() {
  }

}
