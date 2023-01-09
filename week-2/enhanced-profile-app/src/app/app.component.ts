/*
============================================
, Title: app.component.ts
; Author: Ace Baugh
; Date: 09 January 2023
; Description: This component is the root component for the hello-world app.
+===========================================
*/

// import component from angular core
import { Component } from '@angular/core';

// declare the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// export the component class
export class AppComponent {
  // variables to pass to the whole app
  isLoggedIn: boolean = true;
  assignment: string = `Assignment 2.3 - Data Binding`;
}
