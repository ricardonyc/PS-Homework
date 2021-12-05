const colors = ['red', 'purple', 'yellow', 'green']
console.log(colors)
colors.pop()
colors.push("orange")
console.log(colors)

const sentence = ['hello', 'my', 'name', 'is', 'Ricardo']
console.log(sentence.join(" "))


// join

// slice
const food = ['burger', 'sushi', 'pizza', 'oatmeal', 'tacos', 'turkey sandwich']
const favoriteFood = food.slice(4)
console.log(favoriteFood)

// splice
const leastFavorite = food.splice(1, 1)
console.log(leastFavorite)

const haventTried = food.splice(4, 1, 'duck')
console.log(food)

// split and reverse
let myName  = 'odracir'
const myNameArray = myName.split('')
console.log(myNameArray)
console.log(myNameArray.reverse())
console.log(myNameArray.join(""))