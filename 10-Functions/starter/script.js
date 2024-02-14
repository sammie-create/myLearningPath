'use strict';

//Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passemgers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

//More examples on closure
//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//Re-assigning f function
h();
f();

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(
      `There are 3 groups, each with ${Math.trunc(perGroup)} passengers`
    );
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

/*
////////////////////////////////////////////////////////////
//Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

/*
/////////////////////////////////////////////////
//The Call and Apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(354, 'Samuel Durumba');
lufthansa.book(256, 'Simon Durumba');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work because book is now a reg. func. and in a reg. func. the this.keyword is undefined
//book(34, 'Murphy Marshalls');

//The Call method
book.call(eurowings, 747, 'Samuel Durumba');
console.log(eurowings);

book.call(lufthansa, 467, 'Dara Thompson');

const swiss = {
  airline: 'Swiss AirLines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 680, 'Joy Durumba');
console.log(swiss);

//Apply Method
const flightData = [583, 'Thompson Ehima'];
book.apply(swiss, flightData);
console.log(swiss);

//The apply method is rarely used in modern JS, as the call method can be used with a spread operator seperating the values in the array
book.call(swiss, ...flightData);

//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(768, 'Sandra Durumba');
console.log(eurowings);

//partial application, i.e presetting an argument value (i.e the flightnum)
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Eden Samuel-Durumba');
bookEW23('Funke Samuel-Durumba');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(1000));

const taxPayment = function (salary) {
  return function (rate) {
    return salary + salary * rate;
  };
};

const taxCalc = taxPayment(100000);
console.log(taxCalc(0.2));

/*
////////////////////////////////////////////////
//Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Samuel');
greeterHey('Simon');

greet('Hello')('Tyler');

//Using the Arrow function, since its a one line code no need for curly braces and the return.
const greets = greeting => name => console.log(`${greeting} ${name}`);

greets('Welcome')('Alfred');

/*
////////////////////////////////////////////////
//Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer(`Javascript is the best!`, upperFirstWord);

transformer(`Javascript is the best!`, oneWord);

const currentYear = 2023;
const ageCalculator = function (year) {
  return `You are ${currentYear - year} years old`;
};

const displayAge = function (year, fx) {
  console.log(`Birth year: ${year}`);
  console.log(`Displayed Age: ${fx(year)}`);
};

displayAge(1990, ageCalculator);


/*
//////////////////////////////////////////////////////////
//How Passing arguments works: Value vs Refrence

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2478985478,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2478985478) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);

/*
////////////////////////////////////////////
//Default parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //Using short circuiting to set default parameters (old method))
  //numPassengers = numPassengers || 1;
  //price = price || 199 * numPassengers;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 800);
createBooking('LH123', 10);
console.log(bookings);
createBooking('LH123', undefined, 900);//to skip a default parameter
*/
