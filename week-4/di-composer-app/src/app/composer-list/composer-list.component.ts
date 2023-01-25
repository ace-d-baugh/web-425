/*
============================================
, Title: composer-list.component.ts
; Author: Ace Baugh
; Date: 25 January 2023
; Description: Composer list component
+===========================================
*/

// import component and OnInit from angular core
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

// create the component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
// export the class
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  // inject the composer service
  constructor(private composerService: ComposerService) {
    // get the composers from the composer service
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {}
}
