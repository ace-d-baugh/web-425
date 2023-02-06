/*
============================================
; Title:  app-routing.module.ts
; Author: Ace Baugh
; Date: February 6, 2023
; Description: This is the app routing module file
============================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
