import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'home-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() project: Project; 

  ngOnInit() {
  }

}
