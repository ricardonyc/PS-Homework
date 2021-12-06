// Problem 2
var prompt = require("prompt-sync")();

let string = String(prompt("Enter a string: "));
let lowerString = string.toLowerCase();
let chars = 0;
let nums = 0;
let special = 0;
for (let i = lowerString.length-1; i >= 0; i--) {
  if (
    lowerString.charCodeAt(i) >= 97 &&
    lowerString.charCodeAt(i) <= 122
  ) {
    chars++;
  } else if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
    nums++;
  } else {
    special++;
  }
}
console.log(
  `There are ${chars} letters, ${nums} numbers, and ${special} special characters in your string.`
);
