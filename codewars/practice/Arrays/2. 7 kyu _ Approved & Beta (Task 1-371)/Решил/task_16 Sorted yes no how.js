// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
// Complete the method which accepts an array of integers, and returns 
// one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an 
// ascending order
// "yes, descending" - if the numbers in the array are sorted in a 
// descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always 
// be one correct answer.

function isTrue(array, sorted) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== sorted[i]) {
            return false
        }
    }
    return true
}

function isSortedAndHow(array) {
    let asc = [...array].sort((a, b) => a - b)
    let des = [...array].sort((a, b) => b - a)

    return (isTrue(array, asc)) ? "yes, ascending" : (isTrue(array, des)) ? "yes, descending" : "no"
}
console.log(isSortedAndHow([1, 2]))
console.log(isSortedAndHow([15, 7, 3, -8]))
console.log(isSortedAndHow([4, 2, 30]))