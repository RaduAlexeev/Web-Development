// 4. Suma fiecărui element pozitiv din tablou. 
// Returnați suma tuturor celor pozitive. Dacă 
// matricea este goală sau nu există numere pozitive, 
// returnați 0.

const input = [ 1, -4, 12, 0, -3, 29, -150];
sumArray = arr => (arr.length === 0) ? [] : arr.filter( el => el > 0).reduce( (prev, curr) => prev + curr, 0)
console.log(sumArray(input))