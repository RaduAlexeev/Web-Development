https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
// Write a program that outputs the top n elements from a list.
// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

largest = (n, xs) => n === 0 ? [] : xs.sort((x, y) => x - y).slice(-n)

console.log(largest(2, [2, 4, 5, 1, 2, 3, 8])) // [5, 8]
console.log(largest(0, [1,2,3,4,8,7,6,5])) // []
console.log(largest(2, [-1, -5, -2, -3, 0, -7])) // [-1, 0]