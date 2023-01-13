// https://www.codewars.com/kata/63387232198a4c00286aa349/train/javascript

// Date.prototype.getDate = function getGrinchDate() {
//     const date = String(this).split(' ')[2];
//     if (this.getMonth() == 11 && date == '25') {
//         return 26
//     } else {
//         return date
//     }
// }

// let currDate = new Date('2022-10-26');

// console.log(currDate.getMonth())
// console.log(currDate.getDate())


Date.prototype.getDate = function getGrinchDate() {
    const date = String(this).split(' ')[2];
    if (this.getMonth() == 11 && date == '25') {
        return 26
    } else {
        return date
    }
}

let currDate = new Date('2022-10-26');

console.log(currDate.getMonth())
console.log(currDate.getDate())