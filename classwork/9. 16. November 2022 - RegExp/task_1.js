// Transformați din tablou de numere in string cu ajutorul reduce
// Ex: din tabloul [1, 3, 5, 6] => “1356”

let arr = [1, 3, 5, 6]
let str = arr.reduce((prev, curr) => prev + curr, '')
console.log(str, typeof str)