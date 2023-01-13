// https://www.codewars.com/kata/534fcca5edb124cfe6000f60/train/javascript

var Singleton = function () {
    if (Singleton.test) {
        return Singleton.test;
    }

    Singleton.test = this;
}

var obj1 = new Singleton();
var obj2 = new Singleton();

console.log(obj1 === obj2); // => true
obj1.test = 4;
console.log(obj2.test); // => 1