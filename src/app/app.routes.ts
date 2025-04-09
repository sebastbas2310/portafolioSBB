import { Routes } from '@angular/router';
import { HomeComponent } from './models/home/home.component';
import { ProjectsComponent } from './models/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];
