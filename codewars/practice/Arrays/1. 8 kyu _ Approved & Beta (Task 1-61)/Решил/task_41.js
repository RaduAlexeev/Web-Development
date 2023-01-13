// 41. A Needle in the Haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

findNeedle = haystack => haystack !== undefined ? `found the needle at position ${haystack.indexOf('needle')}` : "Your function didn't return anything"

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
console.log(findNeedle())
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']))