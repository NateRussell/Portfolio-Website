import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { ViewportService } from 'src/app/_services/viewport.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { exitLeftAnimation, exitRightAnimation } from 'src/app/_animation/detail-transition-animations';
import { fadeInAnimation } from 'src/app/_animation/content-enter-animations';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.less'],
  animations: [exitLeftAnimation, exitRightAnimation, fadeInAnimation]
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;
  private _nextProject: Project;
  private _previousProject: Project;
  private _pageReady: boolean = false;
  private _exitRight: boolean = false;
  private _exitLeft: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService, private viewportService: ViewportService) { }

  ngOnInit() {
    this.viewportService.onPageReady.subscribe(() => {
      this._pageReady = true;
      this._exitLeft = false;
      this._exitRight = false;
      console.log('enter transition start');
    });

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

  previous(): void {
    this._exitLeft = true;
    console.log('exit transition start');
    const OUTLET_EXIT_DELAY: number = 250;
    setTimeout(() => { //wait until old outlet has faded away
      this.router.navigate([`../${this._previousProject.id}`], { relativeTo: this.route });
    }, OUTLET_EXIT_DELAY);
  }

  next(): void {
    this._exitRight = true;
    console.log('exit transition start');
    const OUTLET_EXIT_DELAY: number = 250;
    setTimeout(() => { //wait until old outlet has faded away
      this.router.navigate([`../${this._nextProject.id}`], { relativeTo: this.route });
    }, OUTLET_EXIT_DELAY);
    
  }
  
}
