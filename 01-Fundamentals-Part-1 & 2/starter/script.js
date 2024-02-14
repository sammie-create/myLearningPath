// let js = 'amazing';
// // if (js === 'amazing') alert('Javascript is FUN');

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);
// console.log('Jones');

// let firstname = 'Matilda';
// console.log(firstname);
// console.log(firstname);
// console.log(firstname);

// const now = 2023;
// const ageSam = now - 1995;
// const ageSimon = now - 1998;
// console.log(typeof ageSam, typeof ageSimon, ageSam, ageSimon)
// console.log(ageSam / 2, ageSimon ** 4)

// let x = 5;
// x--;
// console.log(x);

// console.log(now - 1995 > now - 1998);

// //template literals

// const firstName = 'Samuel';
// const job = 'developer';
// const birthYear = 1995;
// const year = 2023;

// const Samuel = "I'm " + firstName + ' a ' + (year - birthYear) + ' years old ' + job + ' !';
// console.log(Samuel);

// // template literals
// const newSamuel = `I'm ${firstName} a ${year - birthYear} years old ${job} !`;
// console.log(newSamuel);

// console.log('String with \n\
// with \n\
// multiple lines');

// console.log(`string
// with
// multiple lines`);

//if / else statements
const age = 15;

if (age >= 18) {
  console.log(`Sandra is old enough to drive`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sorry!! you have ${yearsLeft} years left.`);
}

const birthYear = 1995;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//Type conversion
const inputYear = "1991";
console.log(inputYear, Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof NaN);

//Type coercion
console.log("I'm " + "a " + 48 + " for" + " Jesus");
//note: Js automatically the strings to number, so that operators can work.
console.log("23" * "2", "50" / "2", "90" / 2, 50 - "2");

let n = "1" + 1 - "5" + "0" / "10";
console.log(n);

//truthy & falsy values
console.log(Boolean(0), Boolean("Samuel"), Boolean(NaN));

let money = 0;
if (money) {
  console.log(`You dey on soft`);
} else {
  console.log(`Sapa dey`);
}

let height = 20;
if (height) {
  console.log(`Yah!! height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}

//equality operators
// console.log('18' == 18)//loose equality operator
// console.log('18' === 18)//strict equality operator

// const favorite = Number(prompt(`What's your favorite number`));
// if (favorite === 18) {
//     console.log(`That's a cool one!!`);
// } else if (favorite > 18) {
//     console.log(`That's a higher number`);
// } else {
//     console.log(`Number is actually low!!`);
// }

// if (favorite !== 18) {
//     console.log(`Use 18 make you rest!!`)
// }

// logical operators
// AND &&, OR ||, NOT !

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = true;

if (hasDriversLicense && hasGoodVision && isTired) {
  console.log(`Samuel can drive`);
} else {
  console.log(`Don't allow Samuel drive`);
}

//switch statement
// const day = 'wedesday';

// switch (day) {
//     case 'monday':
//         console.log(`Practice Javascript`);
//         break;
//     case 'tuesday':
//         console.log(`Pray for long`);
//         console.log(`Read scriptures`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Listen to music`);
//         break;
//     case 'friday':
//         console.log(`Listen to Arome`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend`);
//         break;
//     default:
//         console.log(`Not a valid day`);
//         break;
// }

// if (day === 'monday') {
//     console.log(`Practice Javascript`);
// } else if (day === 'tuesday') {
//     console.log(`Pray for long`);
//     console.log(`Read scriptures`);
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log(`Listen to music`);
// } else if (day === 'friday') {
//     console.log(`Listen to Arome`);
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoy the weekend`)
// } else {
//     console.log(`Not a valid day`);
// }

//The conditional (ternary) operator
const agee = 20;
agee >= 18
  ? console.log(`i like to drink wine`)
  : console.log(`i like to drink water`);

const drink = agee >= 18 ? "wine" : "drink";
console.log(drink);
console.log(`i like to drink ${agee >= 18 ? "wine" : "drink"}`);
console.log(`i like to drink ${drink}`);

// Functions
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = (`Juice with ${apples} apples and ${oranges} oranges.`);
//     return juice;
// }

// const appleJuice = fruitProcessor(10, 6);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(5, 10);
// console.log(orangeJuice);

// Function declaration
function calcAge1(birthyeah) {
  const age = 2037 - birthyeah;
  return age;
}

// Function expression
const calcAge2 = function (birthyeah) {
  return 2037 - birthyeah;
};
age1 = calcAge1(1998);
age2 = calcAge2(1998);
console.log(age1, age2);

// Arrow Function
const calcAge3 = (birthyeah) => 2037 - birthyeah;
const age3 = calcAge3(2000);
console.log(age3);

// const yearsUntilretirement = (birthyeah, firstNamee) => {
//     const age = 2037 - birthyeah;
//     const retirement = 65 - age;
//     return `${firstNamee} you have ${retirement} years left.`;
// }

// const retirementYears = yearsUntilretirement(2002, 'Peter');
// console.log(retirementYears);

// Function calling other functions
function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  //console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(5, 3));

// const calcAge = function (birthyeah) {
//     return 2037 - birthyeah;
// }
// const calcRetirement = function (age) {
//     return 65 - age;
// }

// const yearsUntilretirement = function (birthyeah, firstNamee) {
//     const age = calcAge(birthyeah);
//     const retirement = calcRetirement(age);

//     if (retirement > 0) {
//         return (`${firstNamee} you have ${retirement} years left.`);
//         //return retirement;
//     } else {
//         //console.log(`${firstNamee} is retired 🎉.`);
//         //return -1;
//         return `${firstNamee} is retired 🎉.`;
//     }
// }

// console.log(yearsUntilretirement(1992, 'Jonas'));
// console.log(yearsUntilretirement(2003, 'Peter'));

//Arrays
// literal syntax: arrays in brackets[]
const friends = ["Justeen", "Gift", "Robert", "Chima"];
console.log(friends);

//another way of writing arrays
const ys = new Array("2000", "2001", "2002");

console.log(friends[3]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[3] = "Chulo";
console.log(friends);

const nickName = "Jayblac";
const jayblac = [nickName, "Manuaka", 2037 - 1996, "student", friends];
console.log(jayblac);

const calcAge = function (birthyeah) {
  return 2037 - birthyeah;
};
const years = [1990, 1994, 2000, 2005, 2007];

const ager1 = calcAge(years[0]);
const ager2 = calcAge(years[1]);
const ager3 = calcAge(years[years.length - 1]);
console.log(ager1, ager2, ager3);

const agers = [ager1, ager2, ager3];
console.log(agers);

//Basic array operations (Methods)
//to add elements (push, unshift)
const newLength = friends.push("Matthias", "Dubem");
console.log(newLength);
console.log(friends);

friends.unshift("HOK");
console.log(friends);

//to remove elements (pop, shift)
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(
  friends.indexOf("Gift"),
  friends.includes("Ernest"),
  friends.includes("Matthias")
);

//Objects
// const samuelArray = [
//     'Samuel',
//     'Durumba',
//     2037 - 1995,
//     'developer',
//     ['Justin', 'Gift', 'Robert']]

// const samuelObject = {
//     firstName: 'Samuel',
//     lastName: 'Durumba',
//     age: 2037 - 1995,
//     job: 'developer',
//     friends: ['Justin', 'Gift', 'Robert']
// }
// console.log(samuelObject);

//bracket and dot notation
// console.log(samuelObject.lastName); //dot
// console.log(samuelObject['lastName']); //bracket

// const nameKey = 'Name';
// console.log(samuelObject['last' + nameKey]);

// const intrestedIn = prompt('What do you want to know about Samuel? Choose between firstName, lastName, age, job and friends');

// if (samuelObject[intrestedIn]) {
//     console.log(samuelObject[intrestedIn]);
// } else {
//     console.log('Wrong request!! Choose between firstName, lastName, age, job and friends');
// }

//to add new properties and values to the object using the dot and bracket notation

// samuelObject.club = 'Arsenal';
// samuelObject['location'] = 'Lagos';
// console.log(samuelObject);

// console.log(`${samuelObject.firstName} has ${samuelObject.friends.length} friends, and his best friend is called ${samuelObject.friends[0]}`);

//Object methods

const samuelObject = {
  firstName: "Samuel",
  lastName: "Durumba",
  birthyeah: 1995,
  job: "developer",
  friends: ["Justin", "Gift", "Robert"],
  hasDriversLicense: true,

  // calcAge: function (birthyeah) {
  //     return 2037 - birthyeah;
  // }

  // calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthyeah;
  // }

  calcAge: function () {
    this.age = 2017 - this.birthyeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(samuelObject.getSummary());

console.log(samuelObject);

console.log(samuelObject.calcAge());

//console.log(samuelObject['calcAge'](1995));

//Loops
//for loop keeps running while condition is true
for (let rep = 4; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`);
}

// const samuelArray = [
//     'Samuel',
//     'Durumba',
//     2037 - 1995,
//     'developer',
//     ['Justin', 'Gift', 'Robert'],
//     'Arsenal',
// ];

// const types = [];

// for (let i = 0; i < samuelArray.length; i++) {
//     //reading from samuel array
//     console.log(samuelArray[i], typeof samuelArray[i]);

//     //filling types array
//     //types[i] = typeof samuelArray[1];
//     types.push(typeof samuelArray[i]);
// }
// console.log(types);

// const yeears = [1991, 1998, 2000, 2002];
// const ages = [];

// for (i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// //continue
// for (let i = 0; i < samuelArray.length; i++) {
//     if (typeof samuelArray[i] !== 'string') continue;

//     console.log(samuelArray[i], typeof samuelArray[i]);
// }

// //break
// for (let i = 0; i < samuelArray.length; i++) {
//     if (typeof samuelArray[i] !== 'number') break;

//     console.log(samuelArray[i], typeof samuelArray[i]);
// }

//Looping backwards
const samuelArray = [
  "Samuel",
  "Durumba",
  2037 - 1995,
  "developer",
  ["Justin", "Gift", "Robert"],
  "Arsenal",
];

for (let i = samuelArray.length - 1; i >= 0; i--) {
  console.log(i, samuelArray[i]);
}

//Loops in loops

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`.....Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repitition ${rep} 🏋️‍♂️`);
  }
}

// for (let rep = 4; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`)
// };

//While Loop
let rep = 9;
while (rep <= 10) {
  console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 5);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 5);

  if (dice === 6) console.log(`You have a ${dice}`);
}
