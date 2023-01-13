// RegExp
// check for 1-more matches of g

let text = "rrrrgg rr asdgg sddsgggada g "
let regExp = new RegExp(/g+/gi) // вставляем букву и + для того чтобы все совпадения показала 

console.log( regExp.test(text) ) // true 
console.log( text.match(/g+/gi)) // [ 'gg', 'gg', 'ggg', 'g' ] - + все пары вытаскивает
console.log( text.match(/g/gi)) // [ 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g' ] - без + по одному элементу 


console.log(("rrrrss ss rr ".match(/g/gi))) // null
console.log( /g/gi.test("rrrrss ss rr ") ) // false