// 1. Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element 
// is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const arrayOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
let countPositiveIntegers = 0, sumOfNegativeNumber = 0

for (i of arrayOfIntegers) {
    if (i > 0) {
        countPositiveIntegers++
    } else if (i < 0) {
        sumOfNegativeNumber += i
    } 
}

console.log(`Count positive integers: ${countPositiveIntegers}
Sum of negative numbers: ${sumOfNegativeNumber}`)