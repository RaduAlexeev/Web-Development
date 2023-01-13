const prompt = require("prompt-sync")();

// 2
getYear = year => 2022 - year
//                                                   /2

// 1
function showJournal(journal) {
    return `\nInformatia despre pacient:
-------------------------
    Pacientul - ${journal.numele}
    Rasa - ${journal.rasa}
    Culoarea - ${journal.culoarea}
    Anul nasterii - ${journal.nascut}
    Vaccinele - ${journal.vaccine.vaccina}
    Pasaport - ${journal.pasaport}
    Varsta: ${getYear(journalRuby.nascut)} ani
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\n`
}

console.log('\nIntroducem datele despre pacient:\n')
const journalRuby = {
    numele: prompt('Numele: '),
    rasa: prompt('Rasa: '),
    culoarea: prompt('Culoarea: '),
    nascut: prompt('Nascut: '),
    vaccine: {vaccina: prompt('Vaccine: ')},
    pasaport: prompt('Pasaport: ')
}

console.log(showJournal(journalRuby))
//                                                   /1

// 3
console.log('A fost adaugat recent ')
journalRuby.vaccine = {vaccina: 'Hepatita canina'}
console.log(showJournal(journalRuby))
//                                                   /3

// 4
let permis = journalRuby.pasaport === 'Da' ? 'are' : 'nu are'
console.log(`${journalRuby.numele} ${permis} voie sa iasa din Moldava\n`)
//                                                   /4

// 5
function getHistoryVaccine(istoriaVaccinelor) {
    if (Object.values(istoriaVaccinelor.vaccina) === 'nu are') {
        istoriaVaccinelor.vaccina = 'nu a facut niciun vaccin pana acum'
    } else {
        istoriaVaccinelor.data = prompt('Introduceti data vaccinarii: ')
    }
    console.log(`\nIstoria vaccinarii:\n${istoriaVaccinelor.vaccina} - ${istoriaVaccinelor.data}\n`)    
}

getHistoryVaccine(journalRuby.vaccine)
//                                                   /5