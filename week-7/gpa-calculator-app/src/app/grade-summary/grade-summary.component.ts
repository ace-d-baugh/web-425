/*
============================================
; Title: grade-summary.component.ts
; Author: Ace Baugh
; Date: February 13, 2023
; Description: This is the grade summary component file
============================================
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent {
  // This is the input for the grade
  @Input() grade: string = '';
  @Input() course: string = '';

  constructor() { }
}
