//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds
const even = (array) => array.filter((x) => x % 2 === 0);
console.log(even([2, 5, 6, 7, 10]));

const odd = (array) => array.filter((x) => x % 2);
console.log(odd([1, 2, 5, 6, 7, 10, 17]));

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
const six = (array) => array.filter((x) => x % 6 === 0)
console.log(six([42, 55, 27, 144, 180, 4, 258, 99, 117, 156]))

// this is a new message to see if the git pull works


//Bonus
//using the .filter(), filter out the Full Stack residents

let users = [
    { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
    { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
    { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
    { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
    { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
    { firstName: "Wes", lastName: "Reid", role: "Instructor" },
    { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
  ];
  
  let filteredArray = users.filter((x) => x.role !== "Full Stack Resident");
  console.log(filteredArray)