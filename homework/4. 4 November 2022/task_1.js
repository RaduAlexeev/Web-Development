// 1. Exercițiul 1 - Calculator BMI (Body Mass Index)

// Luiza și Dima vor să își măsoare Body Mass Index (BMI), 
// care se calculează după formula: BMI = greutate / înălțime * înălțime. 
// Greutatea se va măsura în kg, iar înălțimea în metri.

// Cerințe:
// a) Atribuiți valorile greutății și înălțimii în variabile.
// b) Calculați BMI cu formula de mai sus.
// c) Creați o variabilă boolean care să determine dacă BMI-ul lui Dima este mai mare decât al Luizei.
// d) Afișați în consolă cine are un BMI mai mare și care sunt valorile.


// Легкий вариант

function getBMI(greutate, inaltime) {
    return greutate / (inaltime * inaltime)
}

getBoolean = (ftPerson, sdPerson) => ftPerson > sdPerson

getWhoIsGreater = (ftPerson, sdPerson) => ftPerson > sdPerson ? people.infoOfDima.name : people.infoOfLuiza.name

const people = {
    infoOfLuiza: {
        name: 'Luiza',
        bmi: getBMI(50, 1.65).toFixed(2)
    },
    infoOfDima: {
        name: 'Dima',
        bmi: getBMI(90, 1.78).toFixed(2)
    }
} 

console.log(`BMI-ul la ${people.infoOfLuiza.name}: ${people.infoOfLuiza.bmi}
BMI-ul la ${people.infoOfDima.name}: ${people.infoOfDima.bmi}
BMI-ul la ${people.infoOfDima.name} > BMI-ul la ${people.infoOfLuiza.name}? - ${getBoolean(people.infoOfDima.bmi, people.infoOfLuiza.bmi)}
BMI-ul mai mare este la ${getWhoIsGreater(people.infoOfDima.bmi, people.infoOfLuiza.bmi)}`)







// Вариант более легкий
// function BMI(greutate, inaltime) {
//     return greutate / (inaltime * inaltime)
// }

// function boolean(ftPerson, sdPerson) {
//     if (ftPerson > sdPerson) {return true}
//     return false
// }

// function whoIsGreater(ftPerson, sdPerson) {
//     if (ftPerson > sdPerson) {return 'Dima'}
//     return 'Luiza'
// }

// let Luiza = BMI(50, 1.65).toFixed(2)
// let Dima = BMI(90, 1.78).toFixed(2)

// console.log(`BMI-ul Luiza este: ${Luiza}
// BMI-ul Dima este: ${Dima}
// BMI-ul Dima este mai mare decat BMI-ul Luiza: ${boolean(Dima, Luiza)}
// BMI-ul mai mare este la ${whoIsGreater(Dima, Luiza)}`)



// Сложный вариант
// function BMI(greutate, inaltime) {
//     return greutate / (inaltime * inaltime)
// }

// function boolean(ftPerson, sdPerson) {
//     if (ftPerson > sdPerson) {
//         return true
//     } else if (ftPerson < sdPerson) {
//         return false
//     } else {
//         return 'sunt egale'
//     }
// }

// function whoIsGreater(ftPerson, sdPerson) {
//     if (ftPerson > sdPerson) {
//         return 'mai mare este la ' + persons.Dima.name
//     } else if (ftPerson < sdPerson) {
//         return 'mai mare este la ' + persons.Luiza.name
//     } else {
//         return 'sunt egale'
//     }
// }

// const persons = {
//     Luiza: {
//         name: 'Luiza',
//         bmi: BMI(50, 1.65).toFixed(2)
//     },
//     Dima: {
//         name: 'Dima',
//         bmi: BMI(90, 1.78).toFixed(2)
//     }
// } 

// console.log(`BMI-ul ${persons.Luiza.name} este: ${persons.Luiza.bmi}
// BMI-ul ${persons.Dima.name} este: ${persons.Dima.bmi}
// BMI-ul ${persons.Dima.name} este mai mare decat BMI-ul ${persons.Luiza.name}: ${boolean(persons.Dima.bmi, persons.Luiza.bmi)}
// BMI-ul ${whoIsGreater(persons.Dima.bmi, persons.Luiza.bmi)}`)