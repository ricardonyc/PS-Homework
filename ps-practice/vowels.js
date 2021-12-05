function vowels(string) {
  // sets the argument to lowercase
  const str = string.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let numOfVowels = 0;
  // loops through string
  for (let i = 0; i < str.length; i++) {
    // loops through vowels array
    for (let j = 0; j < vowels.length; j++) {
      // compares letter and vowel
      if (str[i] === vowels[j]) {
        // adds 1 to numOfVowels if true
        numOfVowels++;
      }
    }
  }
  return `There are ${numOfVowels} vowels`;
}

console.log(vowels("I ATE A BANANA OUTSIDE WITH YOU"));
