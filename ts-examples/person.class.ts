/*
===============================================================================
; Title:  person.class.ts
; Author: Ace Baugh
; Date:   03 January 2023
; Description: This is a class that implements an interface.
;==============================================================================
*/

// Import the IPerson interface
import { IPerson } from './person.interface';

// Person class implements IPerson interface
class Person implements IPerson {
	firstName: string;
	lastName: string;

	// First name and last name are required parameters for the constructor
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

// Create a new Person object
let myName = new Person('Ace', 'Baugh');
// Display the person's name
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
