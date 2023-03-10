/*
============================================
, Title: app.module.ts
; Author: Ace Baugh
; Date: 09 January 2023
; Description: App module
+===========================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
