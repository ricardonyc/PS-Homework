// Bonus
var prompt = require("prompt-sync")();

const string = String(prompt("Enter a string: "));
const words = string.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

const capitalized = words.join(" ");
console.log(capitalized);
