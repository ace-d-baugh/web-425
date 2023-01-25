/*
============================================
, Title: composer-details.component.ts
; Author: Ace Baugh
; Date: 25 January 2023
; Description: Composer details component
+===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})

export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer!: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }
}
