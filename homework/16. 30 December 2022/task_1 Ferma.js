class Ferma {

    constructor(animals) {
        this.animals = animals;
    }

    wakeUp() {
        this.animals.map(animal => console.log(`${animal.name} hello!`))
    }
}

let  animalsData = [
    {
        name: 'Snow'
    },
    {
        name: 'Nellie'
    },
    {
        name: 'Bessie'
    },
    {
        name: 'Cloud'
    },
    {
        name: 'Wool'
    }
]

let ferma = new Ferma(animalsData)
ferma.wakeUp()

class Animal {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name's ${this.name}`)
    }

    sing() {
        console.log('I believe i can fly …')
    }
}

class Cow extends Animal{
    
    sing() {
        console.log('Mu! mu! mu!')
    }
}

class Sheep extends Animal{

    sing() {
        console.log('Bee! bee! bee!')
    }
}

let dog = new Animal('Rex')
dog.sayName()
let cow = new Cow();
cow.sing()