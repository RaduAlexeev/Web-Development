// https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript

function splitTheBill(object) {

    Object.keys(object).map(key => object[key] = Number(object[key].toFixed(2)))

    const sum = Object.values(object).reduce((prev, curr) => prev += curr, 0);
    const count = Object.keys(object).length
    const media = (sum / count)
    
    Object.keys(object).map(key => object[key] = Number((object[key] - media).toFixed(2)))

    return object
}

let group = {
    A: 20,
    B: 15,
    C: 10
}

console.log(splitTheBill(group))