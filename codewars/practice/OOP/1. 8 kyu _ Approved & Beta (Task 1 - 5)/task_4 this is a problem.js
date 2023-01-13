// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = first + ' ' + last;
}
const n = new NameMe('John', 'Doe');

console.log(n.firstName) //Expected: John
console.log(n.lastName) //Expected: Doe
console.log(n.name) //Expected: John Doe