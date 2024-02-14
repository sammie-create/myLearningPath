'use script';
/*
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
*/
// const convNumber = function (str) {
//   if (str === '' || str === ' ') {
//     console.log(`Please enter an option`);
//   } else Number(str);
//   }
// };

//console.log(convNumber('56'));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // const option = Number(
    //   prompt(
    //     'Enter What is your favourite programming language ?\n 0: JavaScript\n 1: Phyton\n 2: Rust\n 3: C++\n (write option number)'
    //   ).trim() || NaN
    // );
    const option = parseInt(
      // prompt(
      //   'Enter What is your favourite programming language ?\n 0: JavaScript\n 1: Phyton\n 2: Rust\n 3: C++\n (write option number)'
      // )
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
      )
    );
    console.log(typeof option);
    console.log(option);
    // if (option !== null && option !== '') {
    //   const toNumber = Number(option);
    //   if (typeof toNumber === 'number' && toNumber <= 3) {
    //     this.answers[toNumber]++;
    //   } else {
    //     return console.log('invalid option');
    //   }
    // }
    // const toNumber = option === '' || option !== null || Number(option);

    //using the AND logical operator
    // typeof toNumber === 'number' &&
    //   toNumber < this.answers.length &&
    //   this.answers[toNumber]++;

    //using the ternary operator
    // option === 'number' && option < this.answers.length
    //   ? this.answers[option]++
    //   : 'Invalid Option';

    //usimg the if/else statement
    //to make it MORE OPTIMIZED like Jonas' we can use (option < this.answers.length) rather than hardcoding the length
    if (typeof option === 'number' && option <= 3) {
      this.answers[option]++;
    } else {
      return console.log('invalid option');
    }

    this.displayResults();
    this.displayResults('string');
    // const type = this.answers;
  },
  displayResults(type = 'array') {
    console.log(type);
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll Results are ${this.answers.join(', ')}`);
    }
  },
};

// console.log(
//   prompt(
//     "Enter What is your favourite programming language ?\n 0: JavaScript\n 1: Phyton\n 2: Rust\n 3: C++\n (write option number)"
//   )
// );
//poll.answers[2]++;
//console.log(poll.answers);
//poll.registerNewAnswer();
//console.log(poll.answers);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 3, 2] });
poll.displayResults.call({ answers: [5, 3, 2] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
// const Data1 = [5, 2, 3];
// const Data2 = [1, 5, 3, 9, 6, 1];

// const testResults = poll.displayResults;
// console.log(testResults());

console.log(typeof '');

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  console.log(str.split(' '));
  console.log(first, others);
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(upperFirstWord("drummer boys don't die"));

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
