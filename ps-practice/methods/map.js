//Exercise #3
// Write a function called getSquares, that
// takes in an array of numbers and returns an array of their squares

// ex: getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]

const getSquares = (array) => {
  return array.map((x) => x * x);
};

// console.log(getSquares([1, 2, 3, 4, 5]));

// Exercise #3
// Write a function capitalize that takes a string and uses .map to return the same string in all caps.
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('iced tea') // => "ICED TEA"
const capitalize = (string) => {
  return string
    .split("")
    .map((x) => x.toUpperCase())
    .join("");
};


// Exercise# 4
// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hey everyone, lets study together saturday') // => "HEY everyone, LETS study TOGETHER saturday"
let swapCase = function(string){
  return string.split(" ").map((x, index) => index % 2 === 0 ? capitalize(x) : x)
};

console.log(swapCase("hello world how are you sir today"));
// capitalizes every other word