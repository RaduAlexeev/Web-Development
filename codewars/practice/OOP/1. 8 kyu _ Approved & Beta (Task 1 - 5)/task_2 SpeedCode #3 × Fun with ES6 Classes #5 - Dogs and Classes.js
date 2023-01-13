// https://www.codewars.com/kata/56ff9b53140fcca90b000530/train/javascript

class Dog {
    constructor(name, age, gender, species, size, master, loyal) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = species;
        this.legs = 4;
        this.size = size;
        this.master = master;
        this.loyal = loyal;
    }
}

class Labrador extends Dog {
    constructor(name, age, gender, master) {
        super(name, age, gender, "Labrador", "Large", master, true)
    }
}

const spitsy = new Labrador("Spitsy", 10, "Male", "Donald")
const edward = new Labrador("Edward", 3, "Male", "Emma");
console.log(spitsy)
console.log(edward)