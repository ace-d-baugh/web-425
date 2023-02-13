/*
============================================
; Title: base-layout.component.ts
; Author: Ace Baugh
; Date:   February 13, 2023
; Description: This is the base layout component file
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  assignment: string;
  // This adds the assignment string to the app component
  constructor() {
    this.assignment = 'Exercise 6.4 - Input Properties';
  }
}
