// La o ferma la care merge lumea la excursii se dorește ca de dimineață toate animalutele sa se aranjeze într - un rând și sa salute oaspeții.

class Farm {
    list = []

    say() {
        for (let animal of list) {
            animal.greeting()
        }
    }

    create(name, age) {
        list.push(new Animal(name, age))
    }

}

class Animal {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hi - ${this.name} are varsta ${this.age}`)
    } 
}

