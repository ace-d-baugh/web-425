/*
============================================
, Title: my-details.component.ts
; Author: Ace Baugh
; Date: 18 January 2023
; Description: This component is the my-details component for the profile-app app.
+===========================================
*/

// import component and OnInit from angular core
import { Component, OnInit } from '@angular/core';

// create a class for the person
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2023', '#CodingWithAngular', '#ngOmaha'];

  // constructor
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // method to output the person's details
  toString() {
    console.log(
      `Full Name: ${this.fullName}\nFavorite Food: ${this.favoriteFood}\nFavorite Color: ${this.favoriteColor}`
    );
  }
}

// declare the component
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})

// export the component class
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    // create a new person
    this.myProfile = new Person('Ace Baugh', 'Thai Curry', 'Midnight Blue');
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}
