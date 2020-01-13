import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../_services/project.service';
import { Project } from '../../_models/project';
import { scaleInAnimation, fadeInAnimation } from '../../_animation/content-enter-animations';
import { ViewportService } from 'src/app/_services/viewport.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  animations: [ scaleInAnimation, fadeInAnimation ]
})
export class ProjectsComponent implements OnInit{

  projects: Project[][];

  constructor(private projectService: ProjectService, private viewportService: ViewportService) { }

  ngOnInit() {
    this.projectService.index()
      .subscribe(projects => this.projects = this.subdivideProjectArray(projects));
  }

  //split an array of projects into a two dimensional array where the first row begins with the first project
  //and subsequent rows are created when a featured project is encountered
  subdivideProjectArray(projects: Project[]): Project[][] {
    let subdividedProjects: Project[][] = projects.reduce((ouputArray: Project[][], currentProject: Project, currentIndex: Number, sourceArray: Project[]): Project[][] => {
      if (currentProject.featured || ouputArray.length === 0) { //if the project is a featured project or the output array is empty
        ouputArray.push([]); //add a new row to the ouput array
      }
      ouputArray[ouputArray.length - 1].push(currentProject) //add the current project to the last row of the output array
      return ouputArray;
    }, [])
    return subdividedProjects;
  }
}
