var prompt = require("prompt-sync")();

// let row = prompt('Enter number of rows:')
// let col = prompt("Enter number of columns:")
// let row = 3
// let col = 5

// for(let i = 1; i <= row; i++){
//   let str = '';
//   for(let j = 1; j <= col; j++){
//     str += `|${i},${j}`
//   }
//   console.log(str)
// }

/*
                 *
                ***
               *****
              *******
             *********
            ***********
           *************
          ***************
         *****************
        *******************


After the first one, add two extra on the next lines


*/

// let n = 20;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// for (let i = 1; i <= 5; i++) {
//   let chars = "";
//   for (let j = 1; j <= i; j++) {
//     chars += `${i}`;
//   }
//   console.log(chars);
// }

// console.log();

// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     string += `${i}`;
//   }
// }
// console.log(string);

// let str = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     str += `${i}`;
//   }
//   console.log(str);
// }

/*
sisfgvnwr
iemweoctb
ysperotse
weopzewqx
cmquqwecb
rqwbxcdpu

loop through this and find the word "you"
*/

let longString = 'sisfgvnwriemweoctbysperotseweopzewqxcmquqwecbrqwbxcdpu';
let you = '';
for(let i = 0; i < longString.length; i++){
    if(longString[i] === 'y' || longString[i] === 'o' || longString[i] === 'u'){
        you += longString[i]
    }
}

console.log(you)


let text = "sdkyfsriyssmweoewywowefufwy";
let position = text.search("you");
console.log(position)