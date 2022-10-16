const numbers = [12, 56, 87, 44];
const half = numbers.map(num => num / 2);
const thirds = numbers.map(n => n / 3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 },
];

const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(prices);
console.log(items);