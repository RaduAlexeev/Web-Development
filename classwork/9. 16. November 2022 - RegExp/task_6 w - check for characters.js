// RegExp
// check for characters

let text = "Click school 3"
let regExp = new RegExp(/\w/gi)

console.log( regExp.test(text) ) // true
console.log( text.match(/\w/gi))
// [
//     'C', 'l', 'i', 'c',
//     'k', 's', 'c', 'h',
//     'o', 'o', 'l', '3'
//   ]

console.log( regExp.test(" ") ) // false
console.log( " ".match(/\w/gi)) // null