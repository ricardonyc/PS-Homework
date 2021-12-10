  const capitalize = (string) => {
    return string
      .split("")
      .map((x) => x.toUpperCase())
      .join("")
  }

  
  // Exercise# 4
  // Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() function
  // function to return a string where every other word is in all caps. 
  // Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
  // ex: swapCase('hey everyone, lets study together saturday') // => "HEY everyone, LETS study TOGETHER saturday"
  let swapCase = function(string){
    return string.split(" ").map((x, index) => index % 2 === 0 ? capitalize(x) : x)
  }
  
console.log(swapCase("hello how are you sir man chicken"))

  
  //Exercise #5
  // Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
  // alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
  // Ascii code to acomplish this.
  // ex. shiftLetters('hello') // => 'ifmmp'
  // ex. (shiftLetters('abcxyz') // => "bcdyz{"
  const shiftLetters = function(string){
    // code!
  }

  //Bonus 
  //using the .filter(), filter out the Full Stack residents 
  
  let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
               { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
               { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
               { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
               { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
               { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];