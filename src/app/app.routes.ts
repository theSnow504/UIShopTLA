import {RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    

    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home'
          }
    },

    {
    path : 'login',
    loadComponent: () => import('./components/user/user.component').then(m => m.UserComponent),
    data: {
      title: 'Login Page'
    }
    // component : UserComponent
   }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
