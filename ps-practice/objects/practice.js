const dog = {
  name: "yoshi",
  age: 5,
  favoriteFood: "bacon",
  favoriteMovie: "Shrek 2",
  bark() {
    return "woof!";
  },
};

const cat = {
  name: "butters",
  age: 2,
  favoriteFood: "cat nip",
  favoriteMovie: "Avengers",
  meow() {
    return "meeeow!";
  },
};

// console.log(dog.bark());
// console.log(cat.meow());



// rest
const friends = [
  "bill",
  "steve",
  "charlie",
  "shrek",
  "emily",
  "jennifer",
  "monica",
  "frank",
];

let [a, b, c, d, ...closeFriends] = friends;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(closeFriends);

// spread 
function add(...nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
      sum += nums[i]
  }
  console.log(sum)
}

add(3, 4, 2, 6, 2)