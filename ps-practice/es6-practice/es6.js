const prompt = require("prompt-sync")();

// const greet = (fname = "Ada", lname = "Lovelace") => {
//   console.log(`Hello, ${fname} ${lname}`);
// };

// Using only ES6 syntax, write a function for each question to accomplish the following (hint write clean code, use some of these functions as 'helper functions' in other answers):

// Logs a message saying 'Hello world'. Call the function.
// const hello = () => console.log("Hello world");

// Takes a string and logs 'it is [STRING]'. Call the function with an arbitrary string.
const itIs = (string) => `It is ${string}`;

// Takes a temperature and logs whether that temperature is hot (above 72) or cold (below 40). Call the function with an arbitrary temperature.
const temp = (num) => {
  if (num > 72) {
    return itIs("hot");
  } else if (num < 40) {
    return itIs("cold");
  } else {
    return "Today is a good day";
  }
};

// Takes an array of temperatures and logs 'on day [number], it is [hot/cold]'. If it is neither hot or cold, the string should read 'today is a good day'. Call the function with an arbitrary array.
const temps = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`On day ${i + 1}, ${temp(array[i])}.`);
  }
};

temps([20, 93, 53, 35, 77, 12])

