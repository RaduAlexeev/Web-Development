// 3. Exercițiul 3 - Rudy
// Carolina trebuie să îl ducă pe Rudy la veterinar și nu vrea să îi mai 
// explice doctorului tot istoricul lui. Ea vrea să creeze o evidență 
// electronică pe care să o poată accesa ușor.

// Cerințe:
// Creați un obiect care să conțină informații despre Rudy: rasă, culoarea 
// părului, anul nașterii, vaccinuri și dacă are pașaport sau nu. Creați o 
// funcție care afișează toate aceste informații într-un format care să fie 
// citit ușor de către doctor.

// Creați o funcție în obiect care calculează vârsta lui Rudy și afișați-o 
// în mesaj.

// Rudy a primit recent un vaccin pentru hepatită canină. Adăugați acest 
// vaccin în istoricul medical.

// Afișați un mesaj corespunzător dacă Rudy are voie sau nu să iasă din 
// Moldova (dacă are pașaport).

// Carolina a uitat când i-a făcut celelalte vaccinuri lui Rudy și acum știe 
// că trebuie să pună în istoric data fiecărui vaccin. Actualizați obiectul 
// pentru a conține această informație și creați o funcție care afișează istoricul 
// vaccinării. Dacă nu există niciun vaccin, să se afișeze “Rudy nu a făcut niciun 
// vaccin până acum”.

getYear = year => 2022 - year

function showJournal(journal) {
    return `\nInformatia despre pacient:
-------------------------
    Pacientul - ${journal.numele}
    Rasa - ${journal.rasa}
    Culoarea - ${journal.culoarea}
    Anul nasterii - ${journal.nascut}
    Vaccine - ${journal.vaccine.vaccina}
    Pasaport - ${journal.pasaport}
    Varsta: ${getYear(journalRuby.nascut)} ani
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\n`
}

const journalRuby = {
    numele: 'Ruby',
    rasa: 'Haschi',
    culoarea: 'Alba',
    nascut: 2008,
    vaccine: {vaccina: 'nu are'},
    pasaport: "Da"
}

console.log(showJournal(journalRuby))

journalRuby.vaccine = {vaccina: 'Hepatita canina'}
console.log(`A fost facuta o vaccina recent \n${showJournal(journalRuby)}`)
// console.log(showJournal(journalRuby))

let permis = journalRuby.pasaport === 'Da' ? 'are' : 'nu are'
console.log(`${journalRuby.numele} ${permis} voie sa iasa din Moldova\n`)

function getHistoryVaccine(istoriaVaccinelor) {
    if (istoriaVaccinelor.vaccina === 'nu are') {
        console.log('Nu a facut niciun vaccin pana acum')
    } else {
        istoriaVaccinelor.data = '11 Februarie 2022'
        console.log(`Istoria vaccinarii:\n${istoriaVaccinelor.vaccina} - ${istoriaVaccinelor.data}`)
    }   
}

getHistoryVaccine(journalRuby.vaccine)