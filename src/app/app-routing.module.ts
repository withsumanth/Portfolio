import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './profile/about/about.component';
import {IntroComponent} from './profile/intro/intro.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
