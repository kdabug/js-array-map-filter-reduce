// Write a function called `addTenToEachNumber` which will produce
// a new array, and add 10 to each number in the array.
// Use .map()!
// So an array of [10, -1, 48] would turn into [20, 9, 58]

function addTenToEachNumber(numbers) {
  myVar = numbers.map(number => number + 10);
  return myVar;
}

myArr = [10, -1, 48];
console.log(addTenToEachNumber(myArr));
