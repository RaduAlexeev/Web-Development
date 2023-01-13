//https://www.codewars.com/kata/5a05c404697598b477000072/train/javascript
// Given a non-empty array of integers, find the maximum product of elements 
// from all available sequences.
// A sequence here is any pattern in which the elements are equally spaced 
// apart in the array.
// The sequence should start at its place in the array: for example, the 
// sequence of 3 elements apart should start at the third element.
// Example:
// Given the array [11, 6, -2, 0, 5, -4, 2]
// When the sequence is 1 element apart: Product = 11 × 6 × (-2) × 0 × 5 × (-4) × 2 = 0.
// When the sequence is 2 apart: Product = 6 × 0 × (-4) = 0.
// When the sequence is 3 apart: Product = (-2) × (-4) = 8.
// When the sequence is 4 apart: Product = 0
// When the sequence is 5 apart: Product = 5
// When the sequence is 6 apart: Product = -4.
// When the sequence is 7 apart: Product = 2.
// So, the function should return 8.

// Мое решение
function findMaxProduct(arr) {
    let newArray = []
    for (let i = 1; i <= arr.length; i++) {
        newArray.push(arr.filter((el, index) => (index + 1) % i === 0).reduce((a, b) => a * b, 1))
    }
    return Math.max(...newArray)
}

console.log(findMaxProduct([11, 6, -2, 0, 5, -4, 2])) // 8

// // Самое короткое решение
// // function findMaxProduct(arr) {
// //     return Math.max(...arr.map((_, i) => arr.filter((_, j) => (j + 1) % (i + 1) === 0).reduce((a, b) => a * b, 1)));
// //   }