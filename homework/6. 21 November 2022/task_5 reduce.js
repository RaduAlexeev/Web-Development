// Here should be implementation for Array.prototype.reduce
// Some hints:
// similar to myMap, myReduce should take the array as parameter
// also, the callback that will return the new value for accumulator
// and finally the initial value of the accumulator.
//
// Additional hints:
// myReduce should return the final value of accumulator
const array = [1, 2, 3]
                                    
function myReduce(array, cb, initialValue) {
    let accumulator = initialValue
    for (let i = 0; i < array.length; i++) {
        const curr = array[i]
        const index = i       
        accumulator = cb(accumulator, curr, index, array)
    }
    return accumulator
}

const result5 = array.reduce((accumulator, current) => accumulator + current, 5);
console.log(result5)
// pass some props to myReduce, so result6 is the same as result5
const result6 = myReduce(array, (prev, curr) => prev + curr, 5)
console.log(result6)