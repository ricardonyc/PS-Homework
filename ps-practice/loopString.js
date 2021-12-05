var prompt = require('prompt-sync')();

var str = String(prompt('Enter a string: '));
let i = 0
while(i <= str.length-1){
    console.log(str[i])
    i++
}