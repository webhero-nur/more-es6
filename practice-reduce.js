/**
 * 1. You have an array [ 1, 9, 17, 22 ]. Add all the elements of this array and give output. Do this using form loop & array.reduce() method.
 */

const demoArray = [1, 9, 17, 22];
// for loop
let result = 0;
for (const number of demoArray) {
    result += number;
}
console.log(result);

// array.reduce()
const total = demoArray.reduce((sum, number) => sum + number);
console.log(total);

/*
 const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
 ];
 // 2. (Challenging) Follow above array of objects. So you have 3 objects as array element. Can you find out the total sum from here?
 20 + 15 + 22 = 57. The output will be 57
    What are you thinking? Yeah! do it with for loo. I know you can do it.
    But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Rina', age: 22 }
];
// for loop
let ageTotal = 0;
for (const object of people) {
    ageTotal += object.age;
}
console.log(ageTotal);

// array.reduce()
const finalResult = people.reduce((totalAge, newAge) => {
    return totalAge + newAge.age;
}, 0);
console.log(finalResult);