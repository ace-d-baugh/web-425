/*
============================================
; Title: main.ts
; Author: Ace Baugh
; Date: February 13, 2023
; Description: This is the main.ts file for the gpa-calculator-app3
============================================
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
