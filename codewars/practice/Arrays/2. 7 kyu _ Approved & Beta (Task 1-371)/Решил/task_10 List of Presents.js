// https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript
// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, 
// now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function 
// is Leo's budget; the second one is an array containing the price of 
// each gift. You should return an integer representing the maximum 
// amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

// Вариант 1
// function howManyGifts(maxBudget, gifts) {
//     gifts = gifts.sort( (a, b) => a - b)
//     let sum = 0;
//     let i = 0;
//     while (maxBudget >= sum){
//         sum += gifts[i]
//         i++
//     }
//     return i-1
// }

// Вариант 2
// function howManyGifts(maxBudget, gifts){
//     gifts.sort((a, b) => a - b) 
//     return gifts.filter(item => (maxBudget -= item) >= 0).length
// }

// Вариант 3
let howManyGifts = (maxBudget, gifts) => gifts.sort((a, b) => a - b).reduce((prev, curr) => ((maxBudget -= curr) >= 0 ? ++prev : prev), 0)

console.log(howManyGifts(20, [13, 2, 4, 6, 1])) // 4
