import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../_models/project';
import { PROJECTS } from './data/projects';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  index(): Observable<Project[]> {
    return of(PROJECTS);
  }

  latest(count: number): Observable<Project[]> {
    return of(PROJECTS.slice(0, count));
  }

  get(id: number): Observable<Project> {
    return of(PROJECTS.find((project: Project) => { return project.id === id; }))
  }

  getNext(id: number): Observable<Project> {

    let project: Project = PROJECTS.find((project: Project) => {
      return project.id === id;
    });
    let index: number = PROJECTS.indexOf(project);
    index++;
    if (index < PROJECTS.length) {
      return of(PROJECTS[index])
    }
    return of(null);
  }

  getPrevious(id: number): Observable<Project> {
    let project: Project = PROJECTS.find((project: Project) => {
      return project.id === id;
    });
    let index: number = PROJECTS.indexOf(project);
    index--;
    console.log(index);
    if (index >= 0) {
      return of(PROJECTS[index])
    }
    return of(null);
  }
}
