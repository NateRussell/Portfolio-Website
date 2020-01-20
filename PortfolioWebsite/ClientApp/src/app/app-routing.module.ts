import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './page-components/about/about.component';
import { ContactComponent } from './page-components/contact/contact.component';
import { ProjectsComponent } from './page-components/projects/projects.component';
import { HomeComponent } from './page-components/home/home.component';
import { ProjectDetailComponent } from './page-components/project-detail/project-detail.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
