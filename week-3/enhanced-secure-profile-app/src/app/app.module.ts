/*
============================================
, Title: app.module.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: This module is the root module for the profile-app app.
+===========================================
*/

// import modules from angular core
import { NgModule } from '@angular/core';
// import browser module from angular platform browser
import { BrowserModule } from '@angular/platform-browser';
// import app component from app component
import { AppComponent } from './app.component';
// import my image component from my image component
import { MyImageComponent } from './my-image/my-image.component';
// import my details component from my details component
import { MyDetailsComponent } from './my-details/my-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, MyImageComponent, MyDetailsComponent, SignInComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
// export app module
export class AppModule {}
