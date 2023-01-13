//RegExp
// [abc] - matches any char in []
// [abc] - проверяет есть ли в массиве [] некоторые элементы

let text = "Click school click"
let regExp = new RegExp(/[abc]/gi)

console.log(text.match(regExp))

// [ 'C', 'c', 'c', 'c', 'c' ]

console.log( 'Click school click'.match(/[abc]/gi) )

// [ 'C', 'c', 'c', 'c', 'c' ]

//RegExp
// [^abc] - matches any char that is not included in []

let newText = "Click school click"
let newRegExp = new RegExp(/[^abc]/gi)

console.log( newText.match(newRegExp) )

// [
//     'l', 'i', 'k', ' ',
//     's', 'h', 'o', 'o',
//     'l', ' ', 'l', 'i',
//     'k'
// ]

console.log( "Click school click".match(/[^abc]/ig) )

// [
//     'l', 'i', 'k', ' ',
//     's', 'h', 'o', 'o',
//     'l', ' ', 'l', 'i',
//     'k'
// ]