// https://www.codewars.com/kata/5313b713bb244a0eb20001fe

class Counter {
    count;

    constructor() {
        this.count = 0
    }

    incr() {
        return this.count++
    }
}

Counter.prototype.incr = function() {
    return Number(this.count)++
}

var number = new Counter();
number.incr()
number.incr()
number.incr()

console.log(number)