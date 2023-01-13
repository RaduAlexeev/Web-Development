// Your task is to sum the 
// differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// [14, 7, 3, 2, 1]
// Sum: (14 - 7) + (7 - 3) + (3 - 2) + (2 - 1)
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result 
// should be 0 (Nothing in Haskell, None in Rust).


// Решение в интернете
// В таких задачах берётся всегда максимальное и минимальное число.
// И решается следующим образом:

sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0
console.log(sumOfDifferences([14, 7, 3, 2, 1]))
