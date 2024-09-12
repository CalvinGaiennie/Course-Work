'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.value = 177;

  //   //Never create a method inside of a constructor function.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
console.log(matilda);

const jack = new Person('Jack', 1975);
console.log(jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();
jack.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects
