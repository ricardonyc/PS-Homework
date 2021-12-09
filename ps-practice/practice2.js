// loop through an array
// sort it
// return the last value

const numbers = [2, 5, 32, 52, 12, 77, 6, 3];
// const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

numbers.sort((a, b) => {
  console.log(a, b);
  return a - b;
});

console.log(numbers);
