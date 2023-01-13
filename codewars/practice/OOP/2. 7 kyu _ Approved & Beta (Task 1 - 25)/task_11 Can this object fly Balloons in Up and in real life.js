// https://www.codewars.com/kata/59ea2a532a7accf2510000ce/train/javascript

class Journey {
    object;
    crew;
    balloons;

    constructor(object, crew, balloons) {
        this.object = object;
        this.crew = crew;
        this.balloons = balloons;
    }

    isPossible() {
       const totalWeight = this.object['weight'] + (this.crew * 80)
       const totalAccept = this.balloons * 0.0048
       return totalAccept > totalWeight     
    }
}

// 45 000 kg is about 100 000 pounds
// Каждый шарик поднимает 4,8 грамма + свой собственный вес
// 4.8 грамма = 0,0048 кг
const house = {'weight': 45000}
const gravityFalls = new Journey(house, 2, 9500000)
console.log(gravityFalls.isPossible())