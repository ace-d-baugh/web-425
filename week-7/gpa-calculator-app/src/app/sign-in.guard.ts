/*
============================================
; Title: sign-in.guard.ts
; Author: Ace Baugh
; Date: February 13, 2023
; Description: This is the sign-in guard ts file for gpa-calculator-app3
============================================
*/

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  // This is the sign in guard
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    // This checks to see if the cookie exists
    const sessionUser = this.cookieService.get('session_user');

    // This returns true if the cookie exists
    if (sessionUser) {
      return true;
    }
    // This returns false if the cookie does not exist and navigates to the sign in page
    else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }
}
