// 7.

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    let sum = 0
    if (array === undefined) {
        return 0 
    }
    for (i of array) {
      sum += i
    }

    return sum / array.length
}

console.log(findAverage([1, 2, 3, 4]))
