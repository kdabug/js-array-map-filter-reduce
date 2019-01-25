// Given an array of fruits, make a new array called `bananas`
// with the .filter() method that only contains bananas.

const fruits = ["banana", "strawberry", "strawberry", "banana", "strawberry"];
const bananas = fruits.filter(fruit => fruit === "banana");

console.log(bananas);
