// take user choice
// generate random computer choice
// play them against each other

var prompt = require("prompt-sync")();
// console.log("Menu\nr = rock\np = paper\ns = scissors");
// let choice = prompt("Enter a letter: ");
let computerWins = 0;
let userWins = 0;

function computerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Computer Error";
      break;
  }
}

// function userChoice(letter) {
//   switch (letter) {
//     case "r":
//       return "rock";
//       break;
//     case "p":
//       return "paper";
//       break;
//     case "s":
//       return "scissors";
//       break;
//     default:
//       return "User Error";
//       break;
//   }
// }

function game(computer, user) {
  if (computer === user) {
    return "draw";
  }
}

// console.log(computerChoice());


// Computer won: X times
// User won: X times

let games = parseInt(prompt("How many times would you like to play?: "));


while (games < 1 || isNaN(games) === true) {
  games = parseInt(prompt("Please enter a number greater than or equal to 1: "));
}
console.log(games)
