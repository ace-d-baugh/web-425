/*
============================================
, Title: app.module.ts
; Author: Ace Baugh
; Date: 03 January 2023
; Description: This module is the root module for the hello-world app.
+===========================================
*/

// import modules from angular core
import { NgModule } from '@angular/core';
// import browser module from angular platform browser
import { BrowserModule } from '@angular/platform-browser';
// import app component from app component
import { AppComponent } from './app.component';

// declare the module
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})

// export the module class
export class AppModule {}
