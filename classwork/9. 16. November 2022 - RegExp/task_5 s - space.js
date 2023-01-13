//RegExp
// \s - check for space
//    - проверяет все пробелы в строке 
 
let text = "Click school 3" // 2 пробела 
let regExp = new RegExp(/\s/gi)

console.log( text.match(regExp) ) // [ ' ', ' ' ]
console.log( " am lasat multe spatii ".match(/\s/gi) ) // [ ' ', ' ', ' ', ' ', ' ' ]
console.log( " am lasat multe spatii ".match(/^\s/gi) ) // [ ' ' ] - символ ^ вытащил первый пробел
console.log( " am lasat multe spatii ".match(/\s$/gi) ) // [ ' ' ] - символ $ вытащил последний пробел