// https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript

// class Ship {
//     draft;
//     crew;

//     constructor(draft, crew) {
//         this.draft = draft;
//         this.crew = crew;
//     }

//     isWorthIt() {
//         this.draft = this.draft + (1.5 * this.crew)
//         return (this.draft - this.crew) > 20
//     }

// }

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function() {
        return this.draft - this.crew * 1.5 > 20
    }
}
   
const titanic = new Ship(0, 0)
const arkas = new Ship(100, 20)

console.log(titanic.isWorthIt())
console.log(arkas.isWorthIt())