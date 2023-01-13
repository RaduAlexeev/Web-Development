// Pentru un tablou de numere, afișați câte dintre acestea sunt prime.

// function isPrime(number) {    
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {return false}
//     }
//     return true
// }

// function count(n) {
//     let count = 0
//     for (i of n) {
//         if (isPrime(i)) {
//             count++
//         }
//     }
//     return count
// }

// console.log(count([2, 45, 6, 7, 9, 5])) 



function isPrime(array) {   
    for (i of array) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                array = array.filter((element) => {return element != i})
            }
        }
    }
    return array
}

console.log(isPrime([2, 45, 6, 7, 9, 5]).length)