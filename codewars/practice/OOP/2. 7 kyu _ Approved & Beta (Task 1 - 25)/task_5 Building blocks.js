// https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript

// Write a class Block that creates a block(Duh..)

// ##Requirements

// The constructor should take an array as an argument, this will contain 3 integers of the form[width, length, height] from which the Block should be created.

// Define these methods:
// return the surface area of the`Block`

class Block {
    width;
    length;
    height;

    constructor(data) {
        this.width = data[0]
        this.length = data[1]
        this.height = data[2]
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.width * this.length * this.height
    }

    getSurfaceArea() {
        return 2 * (this.width * this.length + this.width * this.height + this.length * this.height)
    }

}

let b = new Block([2, 4, 6]);

console.log(b.getWidth());
console.log(b.getLength());
console.log(b.getHeight());
console.log(b.getVolume());
console.log(b.getSurfaceArea());
 