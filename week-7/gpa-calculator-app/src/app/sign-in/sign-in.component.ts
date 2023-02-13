/*
============================================
; Title:  sign-in.component.ts
; Author: Ace Baugh
; Date: February 13, 2023
; Description: This is the sign-in component ts file for gpa-calculator-app3
============================================
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  // Variables
  signInForm: FormGroup = new FormGroup({});
  errorMessage: string = '';

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {}

  // This function is called when the component is initialized
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      studentId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });
  }

  // This helper function returns the form controls for easy access
  get form() {
    return this.signInForm.controls;
  }

  // This function is called when the user clicks the submit button
  onSubmit() {
    // Get the form values
    const formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId);

    // If the student ID is valid, set the cookie and redirect to the home page
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    }
    // Otherwise, display an error message
    else {
      this.errorMessage =
        'The student ID you entered is invalid, please try again.';
    }
  }
}
