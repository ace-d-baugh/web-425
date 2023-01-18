/*
============================================
, Title: app.module.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: App module
+===========================================
*/

// Import the NgModule object from the @angular/core package
import { NgModule } from '@angular/core';
// Import the BrowserModule object from the @angular/platform-browser package
import { BrowserModule } from '@angular/platform-browser';

// Import the AppRoutingModule object from the ./app-routing.module.ts file
import { AppRoutingModule } from './app-routing.module';
// Import the AppComponent object from the ./app.component.ts file
import { AppComponent } from './app.component';
// Import the ContactComponent object from the ./contact/contact.component.ts file
import { ContactComponent } from './contact/contact.component';
// Import the AboutComponent object from the ./about/about.component.ts file
import { AboutComponent } from './about/about.component';

import { ComposerListComponent } from './composer-list/composer-list.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// Declare the module
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ComposerListComponent,
    ComposerDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
// Export the module
export class AppModule {}
