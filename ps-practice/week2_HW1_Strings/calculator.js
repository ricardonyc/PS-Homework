var prompt = require("prompt-sync")();
// Make a calculator using switch/case and take a user input to perform any calculation. If user enters any value other than 1-5, display a message 'Invalid Option' and end the program.

// console.log("Pick an operator using a number")
console.log("1 = Add\n2 = Subtract\n3 = Multiply\n4 = Divide\n5 = Exit");
let operator = Number(
  prompt("Pick an operator from the menu above using a number: ")
);

if (operator === 5) {
  console.log("Program ended.");
} else if (operator === 1 || 2 || 3 || 4) {
  let num1 = Number(prompt("Enter the first number: "));
  let num2 = Number(prompt("Enter the second number: "));
  switch (operator) {
    case 1:
      console.log(num1 + num2);
      break;
    case 2:
      console.log(num1 - num2);
      break;
    case 3:
      console.log(num1 * num2);
      break;
    case 4:
      console.log(num1 / num2);
      break;
    default:
      console.log("Error, please try again.");
      break;
  }
} else {
  console.log("Invalid Menu Choice.");
}
