// Creati o clasa Masina care are metodele start(), stop()
// Pentru clasa Mașină creați o clasă copil VehiculElectric ce va avea în plus proprietatea baterie(procentaj).
// Creați o metodă accelerează ce crește viteza cu 10 km / h și scade bateria cu 5 %.
// Creați o metodă ce descrie mașina: Tesla albă, fabricată în 2018, merge cu 120 km / h și are 40 % baterie.
// Creați o metodă încărcare ce va crește bateria cu 10 %.
// Creați două obiecte mașini și experimentați cu aceste metode.

class Car {
    speed;
    model;
    color;
    releaseYear;
    isRunning;

    constructor(model, color, speed, releaseYear) {
        this.model = model;
        this.color = color;
        this.releaseYear = releaseYear;
        this.speed = speed;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }

    speedIncrease() { // увеличение скорости 
        if (this.isRunning) {
            this.speed += 10;
            if (this.speed > 150) {
                console.log("Exceeding the speed limit and your speed will be reduced by 30 km/h")
                this.speed -= 30;
            }
        } else {
            console.log("Car is not working")
        }
    }

    getInfoOfCar() {
        return `${this.model} ${this.color}, fabricată în ${this.releaseYear}, merge cu ${this.speed} km / h.`
    }

}

class VehiculElectric extends Car {
    batery;

    constructor(speed, model, color, releaseYear, isRunning) {
        super(speed, model, color, releaseYear, isRunning)
        this.batery = 100;
    }

    speedIncrease() {
        if (this.isRunning) {
            this.speed += 10;
            if (this.speed > 150) {
                console.log("Exceeding the speed limit and your speed will be reduced by 30 km/h")
                this.speed -= 30;
            }
        } else {
            console.log("Car is not working")
        }

        if (this.batery) {
            this.batery -= 5
        } else {
            console.log("Car don't have energy")
        }
        
    }

    charge() {
        this.batery += 10; 
        
    }

    getInfoOfCar() {
        return `${this.model} ${this.color}, fabricată în ${this.releaseYear}, merge cu ${this.speed} km / h si are ${this.batery}% baterie.`
    }
}