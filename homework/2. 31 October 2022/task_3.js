// 3. Scrieți un program care va afișa șirul fibonacci pînă la un număr n. Șirul fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

let a = 0
let b = 1
let sum = 0
let fibonacciNumber = [a, b]
let n = 200

while (sum < n) {
    sum = a + b
    fibonacciNumber.push(sum)
    a = b
    b = sum
}

console.log(fibonacciNumber)