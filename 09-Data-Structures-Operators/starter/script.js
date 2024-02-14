'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Capreses Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //The new way of writing function in enhanced object literals in ES6
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,

  //The new way of writing functions in enhanced object literals in ES6
  // orderDelivery({
  //   starterIndex = 0,
  //   mainIndex = 1,
  //   time = '20:00',
  //   address,
  // }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },

  orderDelivery({ starterIndex = 0, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Working with Strings - Part 3

console.log('a+very+nice+string'.split('+'));
console.log('Samuel Durumba'.split(' '));

const [firstName, lastName] = 'Samuel Durumba'.split(' ');
console.log(firstName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.toLowerCase().split(' ');
  const namesUpper = [];

  for (const n of names) {
    //using the slice method to captilize
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));

    //using the replace method
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('funke agbeye grACe');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Samuel'.padEnd(25, '+').padStart(30, '+'));

/*
coverting a number to a string using diff methods
1. String(number)
2. number.toString()
3. number + ''
*/

//Real world example (a credit card number on the internet)
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(5906453276890987));
console.log(maskCreditCard('56772990'));

//Repeat strings
const message2 = 'Bad weather... All Departures Delayed ';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInline(5);
planesInline(10);
planesInline(6);

/*
////////////////////////////////////////////////////
//Working with Strings - Part 2

const airline = 'Air Peace';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Using a function to fix capitalization in name
const passCorrect = function (passName) {
  const passLower = passName.toLowerCase().trim();
  const passProper = passLower[0].toUpperCase() + passLower.slice(1);
  return passProper;
};

console.log(passCorrect('SaMUEL'));

//Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n';

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(email === normalEmail);

const compareEmail = function (x, y) {
  const compare = x === y;
  return compare;
};

console.log(compareEmail(email, normalEmail));

//Replacing
const priceNGN = '350,45#';
const priceUS = priceNGN.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23, Boarding door 23!`;

console.log(announcement.replace('door', 'gate'));

//using the replaceAll method to replace as the name implies
console.log(announcement.replaceAll('door', 'gate'));

//Using the regExp to replace all occurances of a value
console.log(announcement.replace(/door/g, 'gate'));

//Methods that returns Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`Part of the NEW Airbus family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome aboard!!`);
  }
};

checkBaggage(`I have a Laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and Camera`);
checkBaggage(`I've got some snacks and a gun for protection`);

/*
///////////////////////////////////////////////
//Working with Strings - Part 1

const airline = 'Air Peace';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('e'));
console.log(airline.lastIndexOf('e'));
console.log(airline.indexOf('Peace'));

console.log(airline.slice(4)); //creates a substring of the string starting from the index position specified
console.log(airline.slice(4, 7)); ////creates a substring of the string starting and ending with the index positions specified, it ends at the number before the second index

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-3)); //starts extracting from the end
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B amd E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got the middle seat 😞`);
  else console.log(`You got lucky 😎`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

/*
///////////////////////////////////////////////////
//Maps: Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
//Long thing
question.get('correct') === answer
  ? console.log(question.get(true))
  : console.log(question.get(false));

console.log(question.get(question.get('correct') === answer));
console.log(answer);
//console.log(question.get('correct'));
console.log(question.get(answer));

//Convert map to array
console.log(...question);
console.log(...question.keys());
console.log(...question.values());

/*
/////////////////////////////////////////////////
//Maps: Fundamentals (the Set method)
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 15;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(true);
//rest.clear();
const arr = [1, 2]; //due to how JS works the array to be used as a key should be assigned to a variable, so it can be called.
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
/*
///////////////////////////////////////////////////
//Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size); //to check the size of a set
console.log(ordersSet.has('Pizza')); //to know if a set contains an element
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread'); //to add new element
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto'); //to delete element on the set
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Samueldurumba').size);
/*
///////////////////////////////////////////////////
//Looping Objects: Object Keys, Val, Entries
//Proeprty NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we  are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/*

//Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

//
for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}

/*
////////////////////////////////////////////////////////
//Logical assignment operators - introduced in ES2021
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//The OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//nullish assignment operator
rest2.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator - to assign a value to a variable that's already defined
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
//using the AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

/*
////////////////////////////////////////////////////////////
//The nullish coaleascing operator (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//nullish values (NULL and UNDEFINED) treats 0 and " " as truthy
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
///////////////////////////////////////////////////////////
//Short circuiting (&& and ||)
console.log('--- OR ---');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || 0 || 'Hello' || 23);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--- AND ---');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');


/*
////////////////////////////////////////////////////////
//Rest pattern and parameters

//1. With Destructuring

//SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST, because on th LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//operation of the rest pattern with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2. with Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

/*
/////////////////////////////////////////////////////
//The spread operator (...)
const arr = [7, 8, 9, 10, 11, 34];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //normal way
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //using the spread operator
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join 2 arrays
const merger = [...badNewArr, ...newMenu];
console.log(merger);
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters);

//A real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);

//with spread operator
restaurant.orderPasta(...ingredients);

//without spread operator
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//The spread operator with Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Sammie' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurant.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  mainIndex: 1,
  address: 'Tunde Nott. 8',
});

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

//Destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receiving 2 values from a functiom
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

//Destructuring nested array
const nested = [3, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resturantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let v = 111;
let m = 999;
const obj = { v: 34, m: 24, d: 31 };
({ v, m } = obj);
console.log(v, m);

//Destructuring nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/
