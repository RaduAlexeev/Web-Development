// https://www.codewars.com/kata/56be025f9347a066c7000e4f

Math.roundTo = function(number, precision) {
    return Number(number.toFixed(precision))
}

console.log(Math.roundTo(213.23224, 4))
// expected '3.1416' to equal 3.1416
