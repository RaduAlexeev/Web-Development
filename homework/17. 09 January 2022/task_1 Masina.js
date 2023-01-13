class Car {

    constructor(model, color, speed, releaseYear) {
        this.model = model;
        this.color = color;
        this.releaseYear = releaseYear;
        this.speed = speed;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        return 'The car is driving on the road'
    }

    stop() {
        this.isRunning = false;
        return 'Car stopped'
    }
}

class PetrolVehicle extends Car{
    
    constructor(model, color, speed, releaseYear, tank) {
        super(model, color, speed, releaseYear)
        this.tank = tank;
    }

    accelerate() {
        if (this.isRunning) {
            if (this.tank > 0) {
                this.speed += 10;
                this.tank--
                return `Accelerate successfully`
            } else {
                return `All the oil was consumed`
            }            
        } else {
            return `The car stopped, engine on`
        }
    }

    showCar() {
        return `The ${this.color} ${this.model}, manufactured in ${this.releaseYear}, goes ${this.speed} km/h and has ${this.tank} liters of petrol`
    }

    oilSupply() {
        if (!this.isRunning) {
            this.tank += (this.tank * 10 / 100)
            return `The car was loaded successfully`
        } else {
            return `The car is moving, you need to stop before you refuel`
        }
    }
}