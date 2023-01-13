// Типы полиморфизма
// 1. Параметрический (Истинный)               2. ad-hoc (Мнимый)

// Полиморфизм можно воспринимать как некий принцип который позволяет одному и тому же фрагменту кода работать с разными типами данных.


// 2. ad-hoc 
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
// }

// const calculator = new Calculator()

// console.log(calculator.add(5, 5))
// console.log(calculator.add('5', '5'))

// 1. Параметрический
class Person {
    _firstName;
    _lastName;
    _age;

    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }


    get fullName() {
        return `Фамилия - ${this._firstName} \nИмя - ${this._lastName}`
    }

    // firstName
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    // lastName
    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    // Age
    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            this._age = 0;
        } else {
            this._age = value;
        }
    }

    greeting() {
        console.log(`Привет я человек и меня зовут ${this._firstName}`)
    }
}

// Класс - Работник
class Employee extends Person {
    inn;
    number;
    snils;

    constructor(firstName, lastName, age, inn, number, snils) {
        super(firstName, lastName, age); // здесь мы прописали что он уноследует от родителя
        this.inn = inn;
        this.number = number;
        this.snils = snils;
    }

    greeting() {
        console.log(`Привет я работник и меня зовут ${this._firstName}`)
    }

}

class Developer extends Employee {
    level;
    language;

    constructor(firstName, lastName, age, inn, number, snils, level, language) {
        super(firstName, lastName, age, inn, number, snils);
        this.level = level;
        this.language = language;

    }

    greeting() {
        console.log(`Привет я разработчик и меня зовут ${this._firstName}`)
    }
}

const developer = new Developer('Radu', 'Alexeev', 22, 01, 02, 0234, 'Senior', 'JS, HTML, CSS')
const employee = new Employee('Artem', 'Alexeev', 22, 01, 02, 0234)
const person = new Person('Roma', 'Alexeev', 22)

// developer.greeting()
// employee.greeting()
// person.greeting()

const personList = [developer, employee, person]

function massGreeting(persons) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i]
        person.greeting()
    }
}

massGreeting(personList)