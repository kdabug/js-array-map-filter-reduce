// Given an array of fruits, make a new array called `fruitColors`
// using .map() that "maps" the fruit to its color.
// For example, ['cherry', 'lemon'] would turn into ['red', 'yellow']

const fruits = ["banana", "strawberry", "strawberry", "banana", "strawberry"];

const fruitColor = fruits.map(fruit => {
  if (fruit === "banana") {
    fruit = "yellow";
  } else {
    fruit = "red";
  }
  return fruit;
});

console.log(fruitColor);

const fruitColor2 = fruits.map(fruit =>
  fruit === "bananas" ? "red" : "yellow"
);
console.log(fruitColor2);
