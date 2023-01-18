/*
============================================
, Title: home.component.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: Home component
+===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
