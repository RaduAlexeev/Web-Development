// Наследование

// class - Человек    class - Работник    class - Разработчик
// Имя                ИНН                 Язык программирования 
// Фамилия            СНИЛС               Уровень
// Возвраст           Серия               № команды
//                    Номер

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

}

class Developer extends Employee {
    level;
    language; 

    constructor(firstName, lastName, age, inn, number, snils, level, language) {
        super(firstName, lastName, age, inn, number, snils);
        this.level = level;
        this.language = language;

    }
}

const developer = new Developer('Radu', 'Alexeev', 22, 2000, 78549208, 000161, 'senior', 'JS, HTML, CSS')
console.log(developer)
console.log(developer.fullName)