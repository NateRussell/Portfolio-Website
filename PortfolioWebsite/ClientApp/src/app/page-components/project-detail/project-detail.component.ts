import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { ViewportService } from 'src/app/_services/viewport.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from 'src/app/_models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.less']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;
  private _nextProject: Project;
  private _previousProject: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private viewportService: ViewportService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id: number = +params['id'];
      this.getProject(id);
      this.getNextProject(id);
      this.getPreviousProject(id);
    });
  }

  getProject(id: number): void {
    this.projectService.get(id).subscribe((project: Project) => {
      this.project = project;
    })
  }

  getNextProject(id: number): void {
    this.projectService.getNext(id).subscribe((project: Project) => {
      this._nextProject = project;
    })
  }

  getPreviousProject(id: number): void {
    this.projectService.getPrevious(id).subscribe((project: Project) => {
      this._previousProject = project;
    })
  }
  
}
