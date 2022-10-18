/**
 * 1. You have an odd array (array with odd number).  [ 1, 3, 5, 7, 9 ].
 *      Now convert this array into an even array (array with even number). [ 2, 4, 6, 8, 10 ]. Do this using for loop and array.map() method.
 *      Hints: add one to any odd number add it will become and even number.
 */


const oddArray = [1, 3, 5, 7, 9];
// for loop
const newArray = [];
for (let number of oddArray) {
    newArray.push(number + 1);
}
console.log(newArray);
// array.map()
const evenFromOddArray = oddArray.map(number => number + 1);
console.log(evenFromOddArray);



/**
 * 2. You are given an array say: [33, 50, 79, 90, 101, 30]. Now return/get all the elements which are divisible by 10 using array.filter() method.
 */

// array.filter()
const demoArray = [33, 50, 79, 90, 101, 30];
const divisibleByTen = demoArray.filter(num => num % 10 === 0);
console.log(divisibleByTen);



/**
 * 3. Now do the same taks of question 2. But to this using array.find() method. Then compare the output of question 2 & question 3.
 */

const divisibleByTenFind = demoArray.find(n => n % 10 === 0);
console.log(divisibleByTenFind);