/*
============================================
, Title: app.routing.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: App routing
+===========================================
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
