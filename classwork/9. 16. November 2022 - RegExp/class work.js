//RegExp
// [abc] - matches any char in []
console.log("Click school click".match(/[abc]/ig))
// [^abc] - matches any char that is not included in []
console.log("Click school click".match(/[^abc]/ig))
// [0-9] - check if string has any digit
console.log(/[0-9]/gi.test("Click school 3"))
// [^0-9] - check if string doesn't any digit
console.log(/[^0-9]/gi.test("ggg"))

// [a|c] - check if string doesn't any digit
// console.log(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)
// ) / gi.test("click school"))


const regex = new RegExp(/[0-9]/gi)
console.log("Click school click".match(regex))

// check for space
console.log(" hehhe hhe".match(/\s/gi))

// check for characters
console.log(" hehhe hhe".match(/\w/gi))

// check for digits
console.log(" hehhe hhe 3 4 5".match(/\d/gi))

// check for 1-more matches of g
console.log(("rrrrgg gg rr ".match(/g+/gi)))

// check for 0-more matches of g
console.log(("rrrrgg gg rr ".match(/g+/gi)))

// check for 0-1 matches of g
console.log((/g?/gi.test("rrrrgg gg rr ")))
console.log((/click/gi).exec("Click school click"))
console.log("------------")

// Verificati daca textul dat: 
// “Hello there.It’s 2022 still!” are numere în el 
// cu ajutorul expresiilor regulate
// ex verifica daca sunt prezente numere
console.log(/[0-9]/gi.test("Hello there.It’s 2022 still!"))
// returns digits from text
console.log("Hello there.It’s 2022 still!".match(/[0-9]/gi))
// return first digit found in text
console.log(/[0-9]/gi.exec("Hello there.It’s 2022 still!"))
// check if string starts with "Py" 
console.log(/^Py/.test("Python"))
// check if string ends with "on" 
console.log(/on$/.test("Python is good"))



// Sterge-ti spațiile de la început și sfarsit 
// cu ajutorul expresiilor regulate 
// " hello "
const text = " hello world "
// console.log(text.match(/^\s|\s$/gi))
console.log(text)
// remove spaces from beginning and end with regex
console.log(text.replace(/^\s|\s$/gi, ""))
// remove spaces from beginning and end with trim method
console.log(text.trim())

// remove all spaces 
console.log(text.replace(/\s+/gi, ""))

// Verificați dacă un anumit text contine caractere
// alfanumerica sau nu a-z 0-9
const alpha = "ahdhi3o4i546ij64"
const not_alpha = "ahdhi3o4i54**(#)$)%6ij64"
console.log(!/\W\D/gi.test(alpha))
const checkAlpha = alpha.match(/\W\D/gi)
console.log(checkAlpha)
if (checkAlpha) {
  console.log(alpha.match(/\W\D/gi).length === 0)
} else {
  console.log(true)
}


// concat - uneste doua tablouri

const culori = ["alb", "negru"]
const culoriSemafor = ["verde", "galben", "rosu"]

console.log(culoriSemafor.concat(culori))
// alta metoda de unire a tablourilor
console.log([...culori, ...culoriSemafor])

// reduce 

const numere = [1, 3, 5, 6, 8, 9]
// scade toate numerele din tablou
console.log(numere.reduce((prev, current) => (prev - current)))


// Avand lista de cumparaturi aflați cât va costa totul
// rezultatul trebuie sa fie = 14
const shopingList = [
  { title: "Milk", price: 1 },
  { title: "Bread", price: 2 },
  { title: "Turkey breast", price: 5 },
  { title: "Donuts", price: 5 },
  { title: "Avocado", price: 1 }
];

const price =
  shopingList.reduce((prev, current) => prev += current.price, 0)

console.log(price)
// rezolvare prin for
let suma = 0
for (let item of shopingList) {
  suma += item.price
}


// Transformați din tablou de numere in string cu ajutorul reduce

console.log(numere.reduce((prev, current) => prev += current, ""))