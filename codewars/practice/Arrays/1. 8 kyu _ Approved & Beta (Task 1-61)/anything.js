/// Дополнительно 
// 1. Write a function that takes an array of numbers and returns the sum of the numbers.
//    The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// function sumOfNumbers(arr, result) {
//     for (i of arr) {
//         if (arr.length === 0) {
//             result = 0
//         }
//         result += i
//     }
//     return result
// }

// let listOfNumbers = [1, 5.2, 4, 0, -1]
// let sum = 0

// console.log(sumOfNumbers(listOfNumbers, sum))



// 2. Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// let arr = [1, 2, 3, 4]
// let sum = 1
// for (let i of arr) {
//     sum *= i
// }
// console.log('Result of multiplying:', sum)


// 3. Given an array of integers.
// Return an array, where the first element is the count of positives numbers 
// and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, 0, -13, -14, -15]
// let resultArr = []
// let countPositiveIntigers = 0
// let sumNegativeIntigers = 0

// for (i of arr) {
//     if (i > 0) {
//         countPositiveIntigers++
//     } else if (i < 0) {
//         sumNegativeIntigers += i
//     }
// }
// resultArr.push(countPositiveIntigers, sumNegativeIntigers)
// console.log(resultArr)


// 4. Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// let str = 'I love arrays they are my favorite'  //'Robin Singh'
// let arr

// arr = str.split(' ')
// console.log(arr)


// 5. You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// let arr = [1,-4,7,12] //[]
// let sumPositivIntegers = 0

// for (i of arr) {
//     if (i > 0) {sumPositivIntegers += i
//     } else if (arr.length === 0) {
//         sumPositivIntegers = 0
//     }
// }
// console.log('Sum of positives number: ', sumPositivIntegers)


// 6. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// function convertName(infoOfName) { 
//     infoOfName = infoOfName.split(' ')
//     firstWordOfName = Array.from(infoOfName[0])[0] // infoOfName[0].charAt(0)
//     lastWordOfName = Array.from(infoOfName[1])[0]  // infoOfName[1].charAt(0)
//     return firstWordOfName + '.' +  lastWordOfName
// }    

// let fullName = 'Sam Harris'

// console.log(convertName(fullName))


// 7. Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence 
// and returns the sentence. You can ignore any need to sanitize words or add punctuation, 
// but you should add spaces between each word. Be careful, there shouldn't be a space at the 
// beginning or the end of the sentence!
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function convertToString(text) {
//     return String(text).replaceAll(',', ' ')
// }

// let arr = ['hello', 'world', 'this', 'is', 'great']

// console.log(convertToString(arr))


// 8. Make a function that will return a greeting statement that 
// uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

// function name(infoOfName) {   
//     return `Hello, ${infoOfName} how are you doing today?`
// }

// let userName = prompt('Write ur name: ')

// console.log(name(userName))


// 9. Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).
// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// function countBy(a, b) {
//     arr = []
//     for (let i = 0, sum = 0; b > i; i++) {
//         sum += a
//         arr.push(sum)
//     }
//     return arr
// }

// console.log(countBy(2, 5))


// 10. Take an array and remove every second element from the array. Always keep the 
// first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

// let arr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"]
// for (let i = 0; arr.length > i; i++) {
//     if (i % 2 !== 0) {
//         delete arr[i]
//     }
// }
// console.log(arr.filter(el=>!!el))