import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NgModule } from '@angular/core';
import { FormModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },

  {
    path: 'login',
    loadComponent: () => import('./components/user/user.component').then(m => m.UserComponent),
    data: {
      title: 'Login Page'
    }
    // component : UserComponent
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    data: {
      title: 'Home Page'
    }
    // component : UserComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    FormModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
