// 'use strict';

// function calcAge(birthYear) {
//   const age = 2017 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }

//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// //Hoisting with variables
// console.log(me);
// //console.log(job);
// //console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //with functions
// console.log(addDecl(2, 3));
// //console.log(addExp(2, 3));
// //console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// let addExp = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// var numProducts = 50;
// if (!numProducts) deleteShoppingCart();
// console.log(!numProducts);
// function deleteShoppingCart() {
//   console.log(`All products deleted`);
// }

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  //Arrow function does not get its own this keyword, it takes the this keyword of its parent surrounding i.e the global scope.
  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Samuel', 'Simon'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Sarah');
jessicaCopy.family.push('Sandra');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
