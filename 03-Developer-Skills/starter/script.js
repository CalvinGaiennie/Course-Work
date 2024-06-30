// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//prettier helps your code to look better it is an opinionated code formatterf

// const calcAge = birthYear => 2035 - birthYear;

// console.log(calcAge(20));

//Jonas's problem solving process
//1. make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.
//2. divide and conquer: break a big problem int smaller sub problems. create a task list. (prioritize and execute)
//3. do as much research as needed to solve the problems that you cannot do on your own. this is a huge part of a programmers job.
//4. write pseduo code before writinf the actual code (like an outlife that is readable by humans) write an outline of what you want to do and dont worry about making it functional. make it explain the solution.

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude);

//PROBLEM 2
//FUnction should now receive 2 arrays of temps

//we need to merge the two arrays

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

*/

//HOW TO SOLVE PROBLEMS
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// Challenge;
// given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures

//Example [17, 21, 23] will pring "... 17C in 1 days... 21C in 2 days... and 23C in 3 days..."

//Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

//Use the problem-solving framework: understand the problem and break it up into sub-problems!

//test data 1: [17,211,23]
//test data 2: [12, 5, -5, 0,4]

/*
problem and sub problems
creat a string that outputs a weather forcast
    have the string draw the numbers from an array
    have the string draws the number of days from the array position
    have the string add days and temps depending on the array length
        use a for loop
*/

/*
const arr = [17, 211, 23];
// const printForecast = function (arr) {
//   return `... ${arr[0]} in ${arr.length + 1} days`;
// };

// console.log(printForecast(arr));

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    `... ${arr[i]} in ${i + 1} days`;
    return;
  }
};
console.log(printForecast(arr));
*/

//Jonas Solution
//
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`${data1[0]}C...${data1[1]}C...${data1[2]}C...
`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${arr[i] + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
