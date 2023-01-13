// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

class NamedOne {
    firstName;
    lastName;

    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(text) {
        text = text.split(' ')
        if (text[1]) {
            this.firstName = text[0];
            this.lastName = text[1];
        } 
    }
}

const test = new NamedOne('Radu', 'Alexeev')

console.log(test.firstName)
console.log(test.lastName)
console.log(test.fullName)

test.fullName = 'Ivan Ivanov'

console.log('\n' + test.firstName)
console.log(test.lastName)
console.log(test.fullName)