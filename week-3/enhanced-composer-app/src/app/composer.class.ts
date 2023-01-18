/*
============================================
, Title: composer.class.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: Composer class
+===========================================
*/

// import IComposer interface
import { IComposer } from './composer.interface';

// create a class for composers
export class Composer {

  composers: Array<IComposer>;

  // constructor
  constructor() {
    // create array of composers
    this.composers = [
      {
        composerId: 100, fullName: 'Adam Young', genre: 'Synth Pop'
      },
      {
        composerId: 101, fullName: 'Ashleigh Ball', genre: 'Indie Rock'
      },
      {
        composerId: 102, fullName: 'Brady Parks', genre: 'Indie Folk'
      },
      {
        composerId: 103, fullName: 'David Gahan', genre: 'Synth Pop'
      },
      {
        composerId: 104, fullName: 'Isao Tomita', genre: 'Electronic'
      },
    ];
  }

  // get composers
  getComposers() {
    return this.composers;
  }

  // get composer by id
  getComposer(composerId: number) {
    // loop through composers
    for (let composer of this.composers) {
      // if composerId matches, return composer
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    // if no match, return null
    return null;
  }
}
