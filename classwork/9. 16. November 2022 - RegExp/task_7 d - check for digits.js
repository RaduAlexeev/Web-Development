// RegExp
// check for digits - проверяет есть ли цифры

let text = "Click school 3324"
let regExp = new RegExp(/\d/gi)

console.log( regExp.test(text) ) // true
console.log( text.match(/\d/gi)) // [ '3', '3', '2', '4' ]
console.log( text.match(/\d\d\d\d/gi)) // [ '3324' ]


console.log( regExp.test("Click school") ) // false
console.log( "Click school".match(/\d/gi)) // null