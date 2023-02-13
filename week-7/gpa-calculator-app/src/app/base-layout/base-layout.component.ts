/*
============================================
; Title: base-layout.component.ts
; Author: Ace Baugh
; Date:   February 13, 2023
; Description: This is the base layout component file
============================================
*/

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; // do I need /public-api?
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  assignment: string;
  // This adds the assignment string to the app component
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator';
  }

  // This is the sign out function
  signOut() {
    // This deletes the cookie
    this.cookieService.deleteAll();
    // This navigates to the sign in page
    this.router.navigate(['/session/sign-in']);
  }
}
