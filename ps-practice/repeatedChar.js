var prompt = require('prompt-sync')();

const str = String(prompt("Enter a string: ")).toLowerCase()
const char = String(prompt("Enter a letter: "))
let repeated = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === char.toLowerCase()){
        repeated++
    }
}

console.log(`${char} is repeated ${repeated} times.`) 