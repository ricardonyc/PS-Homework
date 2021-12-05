
let prompt = require("prompt-sync")();

let str = String(prompt("Check for palindrome: "));

let reversed = '';
for(let i = str.length-1; i >= 0; i--){
    reversed += str[i]
}


if(str.toLowerCase() === reversed.toLowerCase()){
    console.log("This is a palindrome")
} else {
    console.log("This is not a palindrome")
}
