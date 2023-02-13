/*
============================================
; Title: sign-in.service.ts
; Author: Ace Baugh
; Date: February 13, 2023
; Description: This is the sign-in service ts file for gpa-calculator-app3
============================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;
  constructor() {
    // This is the array of student IDs
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    // This validates the student ID
    return this.studentIds.some((id) => id === studentId);
  }
}
