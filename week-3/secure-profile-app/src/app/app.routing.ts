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

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
