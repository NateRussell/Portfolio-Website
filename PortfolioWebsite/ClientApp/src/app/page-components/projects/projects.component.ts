import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../_services/project.service';
import { Project } from '../../_models/project';
import { shiftInAnimation, fadeInAnimation } from '../content-enter-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  animations: [ shiftInAnimation, fadeInAnimation ]
})
export class ProjectsComponent implements OnInit{

  loadAnimations: boolean = false;

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.index()
      .subscribe(projects => this.projects = projects);

    setTimeout(() => {
      this.loadAnimations = true;
    },600);
  }
}
