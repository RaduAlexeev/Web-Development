// https://www.codewars.com/kata/56d6b921c9ae3fd926000601/train/javascript

Array.prototype.toString = function() {
    return '[' + this.join(', ') + ']'
}

Number.prototype.toString = function () {
    return '' + this + ''
}

Boolean.prototype.toString = function() {
    return this == true ? 'true' : 'false'
}