// https://www.codewars.com/kata/5d774cfde98179002a7cb3c8

class Animal {

    constructor(name, species, age, health, weight, color) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.health = health;
        this.weight = weight;
        this.color = color;
    }
}

const Animel = makeClass('name', 'species', 'age', 'health', 'weight', 'color')

const dog1 = new Animal('Bob', 'Dog', '5', 'good', '50lb', 'brown')
const dog2 = new Animal('Bob', 'Dog', '5', 'good', '50lb', 'brown')

console.log(Object.keys(dog1).join`,`, Object.keys(dog2).join`,`)
console.log(Object.values(dog1).join`,`, Object.values(dog2).join`,`)