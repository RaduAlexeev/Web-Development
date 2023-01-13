// https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return `${this.name} is a ${this.type}`
    }
}

let dog = new Animal('Max', 'dog') 

console.log(dog.toString())
console.log(dog.type)
console.log(dog.name)

dog.name = 'Lassie'
console.log(dog.name)
console.log(dog.toString())