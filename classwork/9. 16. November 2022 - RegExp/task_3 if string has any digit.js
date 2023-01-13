//RegExp
// [0-9] - check if string has any digit

let text = "Click school 3"
let regExp = new RegExp(/0-9]/gi)

console.log( regExp.test(text) ) // true
console.log( /[0-9]/gi.test('Click school 3') ) // true


// [^0-9] - check if string doesn't any digit

let newText = "Radu scrie cod"
let newRegExp = new RegExp(/[^0-9]/gi)

console.log( newRegExp.test(newText) ) // true
console.log( /[^0-9]/gi.test("Radu scrie cod") ) // true