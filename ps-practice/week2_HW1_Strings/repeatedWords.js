// Problem 3
var prompt = require('prompt-sync')();

let string = String(prompt("Enter a paragraph or sentence: "))
let stringArray = string.split(" ")

let word = String(prompt("Enter one word to see how many times its repeated: "))
let counter = 0;

for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i].toLowerCase() === word.toLowerCase()){
        counter++
    }
}


console.log(`"${word}" is in the paragraph/sentence ${counter} times`)


