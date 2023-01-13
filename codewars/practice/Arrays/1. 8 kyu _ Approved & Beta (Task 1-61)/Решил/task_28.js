// 28. Find numbers which are divisible by given number
// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
// Complete the function which takes two arguments and returns all numbers 
// which are divisible by the given divisor. First argument is an array of numbers 
// and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// function divisibleBy(numbers, divisor){

// }

function divisibleBy(numbers, divisor) {
    let arr = []
    for (item of numbers) {
        if (item % divisor === 0) {
            arr.push(item)
        }
    }
    return arr
}
console.log(divisibleBy([1,2,3,4,5,6], 2))