// 2. Scrieți un program JavaScript pentru a converti temperaturile în și de la 
// Celsius, Fahrenheit.

let C = 10, F = 10

const fahrenheitFormula = (C * (9 / 5) + 32)
const celsiusFormula = ((F - 32) * 5 / 9)

console.log('Celsius:', Math.round(celsiusFormula))
console.log('Fahrenheit:', Math.round(fahrenheitFormula))