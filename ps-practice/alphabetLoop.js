// unicode value for "a" is 97
// unicode value for "z" is 122
const firstLetter = 97;
const lastLetter = 122;

for (let i = firstLetter; i <= lastLetter; i++) {
  let letter = "";
  letter += String.fromCharCode(i);
  console.log(letter);
}
