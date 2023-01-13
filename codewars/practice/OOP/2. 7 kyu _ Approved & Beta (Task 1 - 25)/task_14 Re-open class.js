// https://www.codewars.com/kata/53d628de83db278fb1000710/train/javascript

// 1
String.prototype.myNewMethod= function() {
    return this.split('')
               .map(el => String.fromCharCode(el.charCodeAt() - 32))
               .join('')
}  

console.log('abc'.myNewMethod())

// A = 65   Z = 90        разница - 32
// a = 97   z = 122

// 2
String.prototype.myNewMethod = String.prototype.toUpperCase
console.log('abc'.myNewMethod())