//RegExp
// [a|c] - проверяет если одна из букв есть в нашей строке

let text = "Click school 3"
let regExp = new RegExp(/[a|c]/gi)

console.log( regExp.test(text) ) // true
console.log( /[e|z]/gi.test('Petalele cad frumos') ) // true
console.log( /[x|z]/gi.test('Petalele cad frumos') ) // false