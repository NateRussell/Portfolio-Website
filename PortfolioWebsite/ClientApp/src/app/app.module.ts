import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout-components/app.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { NavigationComponent } from './layout-components/navigation/navigation.component';
import { ContactComponent } from './page-components/contact/contact.component';
import { AboutComponent } from './page-components/about/about.component';
import { ProjectsComponent } from './page-components/projects/projects.component';
import { HomeComponent } from './page-components/home/home.component';
import { ConnectComponent } from './layout-components/connect/connect.component';
import { SideBarComponent } from './layout-components/side-bar/side-bar.component';
import { OverlayComponent } from './utility-components/overlay/overlay.component';
import { InnerLayoutComponent } from './layout-components/inner-layout/inner-layout.component';
import { SideConnectComponent } from './layout-components/side-connect/side-connect.component';
import { SideNavigationComponent } from './layout-components/side-navigation/side-navigation.component';
import { ProjectComponent } from './page-components/projects/project/project.component';
import { ProjectComponent as HomeProjectComponent } from './page-components/home/project/project.component';
import { LoadBarComponent } from './layout-components/load-bar/load-bar.component';
import { AnimateWhenReachedComponent } from './_animation/animate-when-reached/animate-when-reached.component';
import { ProjectDetailComponent } from './page-components/project-detail/project-detail.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    HomeComponent,
    ConnectComponent,
    SideBarComponent,
    OverlayComponent,
    InnerLayoutComponent,
    SideConnectComponent,
    SideNavigationComponent,
    ProjectComponent,
    HomeProjectComponent,
    LoadBarComponent,
    AnimateWhenReachedComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
