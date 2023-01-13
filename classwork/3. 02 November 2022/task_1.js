// 1.

// Varianta 1

const tab = ["1", "2", "3"]
let num = ''
for (i of tab) {
    num += i
}
console.log(Number(num))

// Varianta 2

const newTab = ["1", "2", "3"]
console.log(Number(newTab.join('')))