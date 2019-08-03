import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../_models/project';
import { PROJECTS } from './data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  index(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
