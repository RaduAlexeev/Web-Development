// Exercițiul 3 - Rudy

class Dog {
    nume;
    rasa;
    culoareaParului;
    anulNasterii;
    vaccinuri;
    arePasaport;

    constructor(nume, rasa, culoareaParului, anulNasterii, vaccinuri, arePasaport) {
        this.nume = nume;
        this.rasa = rasa;
        this.culoareaParului = culoareaParului;
        this.anulNasterii = anulNasterii;
        this.vaccinuri = vaccinuri;
        this.arePasaport = arePasaport
    }

    showInfo() {
        return `Hello my name is ${this.nume}, 
            \nI'm ${this.getAge()} years old. 
            \nMy breed is ${this.rasa}. 
            \nThe hair color is ${this.culoareaParului}.
            \n${this.vaccinuri.length > 0 ? "I have" : "I don't have"} the vaccines.
            \n${this.arePasaport ? "I have" : "I don't have"} the passport and ${this.arePasaport ? "I can" : "I can't"} travel.`
    }

    showVaccines() {
        console.log('\nHistory of vaccines:')
        if (this.vaccinuri.length == 0) {
            return console.log(`${this.nume} has not had any vaccinations so far`)
        } else {
            this.vaccinuri.push({data: '2022-09-09'}, {nameVaccine: 'Pfizer'})
        }
    }

    getAge() {
        return 2022 - this.anulNasterii
    }

    
}

const ruddy = new Dog('Ruddy', 'Husky', 'white', 2018, [], true)
ruddy.vaccinuri.push({data: '2022-10-10'}, {nameVaccine: 'Hepatita canina'})

console.log(ruddy.showInfo())

ruddy.showVaccines()
console.log(ruddy.vaccinuri)