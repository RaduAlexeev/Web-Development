// 47. SpeedCode #2 - Array Madness
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that 
// returns true if the sum of the squares of each element in a is strictly greater 
// than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 
// 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

arrayMadness = (a, b) => 
a.map((el) => el ** 2).reduce((prev, curr) => prev + curr, 0) 
> 
b.map((el) => el ** 3).reduce((prev, curr) => prev + curr, 0)


console.log(arrayMadness([4,5,6],[1,2,3])) // true
console.log(arrayMadness([5,6,7],[4,5,6])) // false