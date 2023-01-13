// https://www.codewars.com/kata/56951add53eccacf44000030/train/javascript

// class Dog {
    
//     constructor(name, age, breed, vaccinated, wormed) {
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//         this.vaccinated = vaccinated;
//         this.wormed = wormed;
//     }

//     checkDog() {
//         const count = [this.vaccinated, this.wormed].filter(el => el == true).length
//         if (count == 2) {
//             return `${this.name} can be accepted`
//         }
//         if (count == 1) {
//             return `${this.name} can only be accepted by itself`
//         } 
//         if (count == 0) {
//             return `${this.name} can not be accepted`
//         }
//     }
// }

Dog.prototype.checkDog = function() {
    const count = [this.vaccinated, this.wormed].filter(el => el == true).length
    if (count == 2) {
        return `${this.name} can be accepted`
    }
    if (count == 1) {
        return `${this.name} can only be accepted by itself`
    }
    if (count == 0) {
        return `${this.name} can not be accepted`
    }
} 

const spot = new Dog("Spot", 5, "Labrador", false, false);
spot.checkDog()