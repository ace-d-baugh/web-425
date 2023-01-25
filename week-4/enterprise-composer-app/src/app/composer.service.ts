/*
============================================
, Title: composer.service.ts
; Author: Ace Baugh
; Date: 25 January 2023
; Description: Composer service
+===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

  // constructor
  constructor() {
    // create array of composers
    this.composers = [
      {
        composerId: 100,
        fullName: 'Adam Young',
        genre: 'Synth Pop',
      },
      {
        composerId: 101,
        fullName: 'Ashleigh Ball',
        genre: 'Indie Rock',
      },
      {
        composerId: 102,
        fullName: 'Brady Parks',
        genre: 'Indie Folk',
      },
      {
        composerId: 103,
        fullName: 'David Gahan',
        genre: 'Synth Pop',
      },
      {
        composerId: 104,
        fullName: 'Isao Tomita',
        genre: 'Electronic',
      },
    ];
  }

  // get composers
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
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
    return {} as IComposer;
  }

  // filter composers by name
  filterComposers(name: string): Observable<IComposer[]> {
    // return filtered composers
    return of(this.composers).pipe(
      // map the composers to a new array
      map((composers) =>
      // filter the composers by name
        composers.filter((composer) =>
          // if the name is found, return the composer (added extra toLowerCase to make it case insensitive)
          composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1)
        )
      );
  }

}
