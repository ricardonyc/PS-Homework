//Exercise #5
// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"

const shiftLetters = function (string) {};

// prints 111
// this gives you the ascii number of a letter
// console.log("helLo".charCodeAt(4));

// prints "o"
// this gives you the letter at the ascii number you pass
// console.log(String.fromCharCode(111));

// takes a string of words
// uses map to return an encoded string with each of the letters shifted down the alphabet by one
// use String.fromCharCode() and String.CharCodeAt() and see if you can use ASCII code
// "hello" => "ifmmp"

function yeet(string) {
  string.split("").map((x) => x.charCodeAt());
}

console.log(yeet("hi"));
