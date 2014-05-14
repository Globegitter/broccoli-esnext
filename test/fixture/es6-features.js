'use strict';

var double = num => num * 2;

class Person {
  constructor(givenName, surname) {
    this.givenName = givenName;
    this.surname = surname;
  }
  
  get fullName() {
    return `${ this.givenName } ${ this.surname }`;
  }
}

function multiply(x=0, y=0) {
  return x * y;
}

function* gen(i) {
  while(true) {
    yield i++;  
  }
}
