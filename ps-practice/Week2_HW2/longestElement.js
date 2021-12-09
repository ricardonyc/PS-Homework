// 3. Write a program to find the longest element in a string array.

const strings = ['pigeon', 'lollipop', 'burger', 'unnecessary', 'hi']

const longestString = strings.reduce((a, b) => a.length > b.length ? a : b)



console.log(longestString)