// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const p = '53';
// if (p === 53) console.log(p);

// const calcAge = birthyear => 2037 - birthyear;
// console.log(p);
// console.log(p);

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13];
const temperatures2 = [17, 15, 14, 9, 5, 20];

// 1) Understanding the problem
// - what is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

//2) Breaking up into sub-problems
// - How to ignore errors? use continue statement
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max and return it

const calcTempAmplitude = (t1, t2) => {
  let temps = t1.concat(t2);
  console.log(temps);
  let min = temps[0];
  let max = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures, temperatures2);
console.log(amplitude);
//PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

//2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// //calcTempAmplitude([23, 701, 90, 45, 200, 3]);
// const amplitudeNew = calcTempAmplitudeNew([20, 56, 45], [3, 41, 27]);

// console.log(amplitudeNew);

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// //calcTempAmplitude([23, 701, 90, 45, 200, 3]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//Given an array of forecasted max temp, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17C in 1 days ...21C in 2 days ...23C in 3 days"
// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let print = '';

  for (let i = 0; i < arr.length; i++) {
    print += ` ... ${arr[i]}°C in ${i + 1} days`;
    //' ... ' + arr[i] + 'C' + ' in ' + (i + 1) + ' days';
  }
  return print;
};

console.log(printForecast(data1));
console.log(printForecast(data2));

//Debugging (fixing errors)

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    //c) Fix: converting prompt value to a number
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // b) Finding the bug: value of temp measurement inputed as a string instead of a number

  console.log(measurement);
  console.table(measurement); //to display contents of an object in table format.
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// a) Identify the bug (because running it gave the error 10273 instead of 283 = (10 + 273))
console.log(measureKelvin());

//Debugging using the debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
//calcTempAmplitude([23, 701, 90, 45, 200, 3]);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// a) Identify
console.log(amplitudeBug);
