/*
============================================
; Title: home.component.ts
; Author: Ace Baugh
; Date: February 6, 2023
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

  transcriptEntries: Array<ITranscript> = [];

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }
}
