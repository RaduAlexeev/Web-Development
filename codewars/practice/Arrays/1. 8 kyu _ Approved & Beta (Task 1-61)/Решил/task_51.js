// 51. Printing Array elements with Comma delimiters
// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

printArray = array => array.join(',')
console.log(printArray(["h","o","l","a"])) // 'h,o,l,a'