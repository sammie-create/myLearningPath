// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// Coding Challenge 1

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// let mass = weightMark;
// let height = heightMark;
// let BMI = mass / (height * height)
// let markBMI = BMI;

// mass = weightJohn;
// height = heightJohn;
// BMI = mass / (height * height)
// johnBMI = BMI;

// console.log(markBMI);
// console.log(johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMImark = massMark / (heightMark * heightMark);
const BMIjohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMImark > BMIjohn;

console.log(BMIjohn, BMImark, markHigherBMI);

// coding challenge 2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

if (BMImark > BMIjohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

if (BMImark > BMIjohn) {
  console.log(`Mark's BMI (${BMImark}) is higher than John's (${BMIjohn})!`);
} else {
  console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMImark})!`);
}
// Using the tenary operator instead of the if else statement
BMImark > BMIjohn
  ? console.log(`Mark's BMI is higher than John's!`)
  : console.log(`John's BMI is higher than Mark's!`);

// coding challenge 3
// There are two gymnastics teams: Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data included below.The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or "Koalas win the trophy" if Koalas win, or "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Both win the trophy`);
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win the trophy`);
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (106 + 95 + 109) / 3;

console.log(scoreDolphins, scoreKoalas);

const minimumScore = 100;

if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
  console.log(`Dolphin wins the trophy`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore) {
  console.log(`Koalas win the trophy`);
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= minimumScore &&
  scoreKoalas >= minimumScore
) {
  console.log(`Both win the trophy`);
} else {
  console.log(`No one wins the trophy`);
}

// coding challenge 440
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

//const bill = Number(prompt('Enter the amount'))
// const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

// let tip;
// if (bill >= 50 && bill <= 300) {
//     tip = bill * (15 / 100);
// } else {
//     tip = bill * (20 / 100);
// }

// console.log(`The tip is ${tip}`);
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`)

//Coding challenge 1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time
// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}) 🏆`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}) 🏆`);
  } else {
    console.log(`No team wins...`);
  }
};

//Test data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

//Test data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

//usng arrow function and tenary operator
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

// const bills = new Array(125, 555, 44);
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
// console.log(total);

//using function expression and if/else statement

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * (15 / 100);
//     } else {
//         return bill * (20 / 100);
//     }
// }
// console.log(calcTip(500));

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// console.log(tips);

// const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
// console.log(total);

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before(no need to repeat) to calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips[i] = tip;
  totals.push(tip + bills[i]);
  //tips[i] = calcTip(bills[i]);
}
console.log(tips);

// for (let i = 0; i < bills.length; i++) {
//     totals.push(calcTip(bills[i]) + bills[i]);
// }
console.log(totals);

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const calcAveragee = function (arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;

  //let sum = 0;
  // for (i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  // }
  // return sum / arr.length;
};

console.log(calcAveragee([2, 4, 6, 8, 10]));
console.log(calcAveragee(tips));
console.log(calcAveragee(totals));
