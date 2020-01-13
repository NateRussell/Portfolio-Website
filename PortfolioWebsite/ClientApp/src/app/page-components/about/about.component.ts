import { Component, OnInit } from '@angular/core';
import { rightSlideInAnimation } from '../../_animation/content-enter-animations';
import { ViewportService } from 'src/app/_services/viewport.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  animations: [rightSlideInAnimation]
})
export class AboutComponent implements OnInit {

  constructor(private viewportService: ViewportService) { }

  ngOnInit() {
  }

}
