// https://www.codewars.com/kata/5882b052bdeafec15e0000e6/train/javascript

class Quark {
    color;
    flavor;
    baryon_number; 

    constructor(color, flavor) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 1 / 3;
    }

    interact(any) {
        [this.color, any.color] = [any.color, this.color]
    }
}

let q1 = new Quark("red", "up")
let q2 = new Quark("blue", "strange")

q1.interact(q2)
console.log(q1.color)
console.log(q2.color)