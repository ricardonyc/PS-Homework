//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds
const even = (array) => array.filter((x) => x % 2 === 0);
console.log(even([2, 5, 6, 7, 10]));

const odd = (array) => array.filter((x) => x % 2);
console.log(odd([1, 2, 5, 6, 7, 10, 17]));

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
const six = (array) => array.filter((x) => x % 6 === 0)
console.log(six([42, 55, 27, 144, 180, 4, 258, 99, 117, 156]))