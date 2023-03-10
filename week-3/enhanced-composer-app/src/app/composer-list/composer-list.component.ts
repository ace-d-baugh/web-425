/*
============================================
, Title: composer-list.component.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: Composer list component
+===========================================
*/

// import component and OnInit from angular core
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {}
}
