// Un șir Fibonacci este un șir de numere care se formează
// prin suma ultimelor două numere din șir, începând cu 0, 1.
// Scrieți o funcție care afișează primele n numere din șirul
// Fibonacci, unde n este parametrul funcției.

// Exemplu Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13…

// Варианта 1

function getFibonacciSequence(number) {
    let a = -1, b = 1, sum = 0, fib = []
    while (sum < number) {
        sum = a + b
        fib.push(sum)
        a = b
        b = sum
    }
    return fib
}
const showFibonacciSequence = getFibonacciSequence(200)
console.log(showFibonacciSequence)

// Варианта 2

// let n = 10, f = 0, p = 1;
// for (let i=0; i<n; i++){
//   console.log(f);
//   f = f+p;
//   p = f-p;
// }