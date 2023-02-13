/*
============================================
; Title: gpa.component.ts
; Author: Ace Baugh
; Date: February 13, 2023
; Description: This is the gpa component file
============================================
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss'],
})
export class GpaComponent {
  @Input() gpaTotal: number = 0;

  constructor() { }
}
