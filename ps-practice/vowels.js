var prompt = require("prompt-sync")();
let string = String(prompt("Enter a word or sentence: "));
const vowels = ["a", "e", "i", "o", "u"];
let numOfVowels = 0;

for (let i = 0; i < string.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (string[i] === vowels[j]) {
      numOfVowels++;
    }
  }
}

console.log(`There are ${numOfVowels} vowels`)