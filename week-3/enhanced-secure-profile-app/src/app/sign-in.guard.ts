/*
============================================
, Title: sign-in.guard.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: Sign in guard
+===========================================
*/

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  // Inject router
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Check if user is logged in
    let isLoggedIn = next.queryParams.isLoggedIn;
    // If user is logged in, return true
    if (isLoggedIn) {
      return true;
    } else {
      // If user is not logged in, redirect to sign-in page
      this.router.navigate(['/']);
      return false;
    }
  }
}
