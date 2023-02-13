/*
============================================
; Title: home.component.ts
; Author: Ace Baugh
; Date: February 13, 2023
; Description: This is the home component file
============================================
*/

import { Component } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  transcriptEntry: ITranscript;

  // This is the array of grades
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];

  gpaTotal: number = 0;

  transcriptEntries: Array<ITranscript> = [];

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  // This is the function that saves the entry
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  // This is the function that calculates the GPA
  calculateResults() {
    let gpa:number = 0;
    for (let transcriptEntry of this.transcriptEntries) {
      switch (transcriptEntry.grade) {
        case 'A':
          gpa += 4;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C':
          gpa += 2;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        case 'F':
          gpa += 0;
          break;
      }
    }
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // This is the function that clears the entries
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}