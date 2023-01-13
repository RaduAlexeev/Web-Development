// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript


var Ghost = function () {
    this.color = ['white', 'yellow', 'red', 'purple'][Math.floor(Math.random() * 4)]
};

const ghost = new Ghost();
console.log(ghost.color)