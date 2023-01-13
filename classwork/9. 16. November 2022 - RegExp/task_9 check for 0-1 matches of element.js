// RegExp
// check for 0-1 matches of element
console.log((/g?/gi.test("rrrr rr ")))


// // Verificati daca textul dat: 
// // “Hello there.It’s 2022 still!” are numere în el 
// // cu ajutorul expresiilor regulate
// // ex verifica daca sunt prezente numere
// console.log(/[0-9]/gi.test("Hello there.It’s 2022 still!"))
// // returns digits from text
// console.log("Hello there.It’s 2022 still!".match(/[0-9]/gi))
// // return first digit found in text
// console.log(/[0-9]/gi.exec("Hello there.It’s 2022 still!"))
// // check if string starts with "Py" 
// console.log(/^Py/.test("Python"))
// // check if string ends with "on" 
// console.log(/on$/.test("Python is good"))