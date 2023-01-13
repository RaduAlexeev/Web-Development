//  Взаимодействия между классами

// 1. Композиция
// Класс - Автомобиль
// -----------------------
// | Двигатель, 4 колеса |
// -----------------------


// 2. Агрегация
// -----------------------        ---------------------
// | Двигатель, 4 колеса |   <-   | Елочка освежитель |
// -----------------------        ---------------------


class Engine {
    drive() {
        console.log('Двигатель работает')
    }
}

class Wheel {
    drive() {
        console.log('колеса едут')
    }
}

// Агрегат - освежитель
class Freshener {

}

// Класс квартира - которая тоже может использовать освежитель 
class Flat {
    freshener;

    constructor(freshener) {
        this.freshener = freshener
    }

}

class Car {
    engine;
    wheels = [];
    freshener;

    constructor(freshener) {
        // Агрегация
        this.freshener = freshener
        // композиция
        this.engine = new Engine();
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())

    }

    // делигирование
    drive() {
        this.engine.drive();
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive(); 
        }
    }
}

const bmw = new Car()
bmw.drive()