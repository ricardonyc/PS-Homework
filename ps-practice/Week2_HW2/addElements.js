// 1. Write a program to add up all the elements of a number array.

const nums = [2, 10, 34, 7, 99, 53, 69];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
}
console.log(sum)