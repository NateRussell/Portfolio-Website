import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../_models/project';
import { fadeInAnimation } from '../content-enter-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [ fadeInAnimation ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  index(): Observable<Project[]> {

    return null;
  }

  get(id: number): Observable<Project> {

    return null;
  }

}
