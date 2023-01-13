// https://www.codewars.com/kata/5121303128ef4b495f000001

class Person {
    name; 

    constructor(name) {
        this.name = name;
    }

    greet(anyName) {
        return `Hello ${anyName}, my name is ${this.name}`    }
}

const joe = new Person('Jae');
joe.greet('Kate');
console.log(joe.name)