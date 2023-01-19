/*
============================================
, Title: sign-in.guard.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: Sign in guard
+===========================================
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
