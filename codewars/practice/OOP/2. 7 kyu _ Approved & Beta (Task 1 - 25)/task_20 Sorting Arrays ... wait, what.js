// https://www.codewars.com/kata/56bac4c34537cf1e270005a1/train/javascript

Array.prototype.sort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < (this.length - i - 1); j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j]
                this[j] = this[j + 1]
                this[j + 1] = temp
            }
        }
    }
    return this.filter(el => el > 0)
}

var array = [9, 7, 2, -4, 5, 3, 6, 8, 1]

console.log(array.sort())