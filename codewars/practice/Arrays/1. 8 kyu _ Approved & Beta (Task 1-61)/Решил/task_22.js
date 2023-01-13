// 22. To square(root) or not to square(root)
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
// Write a method, that will get an integer array as parameter and will 
// process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// Моё решение
function isFloat(integer) {
    let index = String(integer).indexOf('.')
    return index > 0 ? true : false
}

function squareOrSquareRoot(array) {
    let newArray = []
    for (i of array) {
        if (isFloat(Math.sqrt(i))) {
            newArray.push(i ** 2)
        } else {
            newArray.push(Math.sqrt(i))
        }
    }
    return newArray
}

// Решение в интернете
bot = array => array.map(el => Math.sqrt(el) % 1 ? el ** 2 : Math.sqrt(el))

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))
console.log(bot([4, 3, 9, 7, 2, 1]))