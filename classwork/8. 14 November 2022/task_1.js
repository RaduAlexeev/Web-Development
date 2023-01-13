// Creați un obiect “țară” care să conțină 
// proprietățile nume, capitală, populație și vecini.
// Afișați un mesaj pe modelul: Finlanda are o populație 
// de 4 milioane, capitala este Helsinki și vecinii sunt 
// Suedia, Norvegia și Rusia.

const tara = {
    nume: 'Finlanda',
    capitala: 'Helsinki',
    populatia: 4,
    vecini: ['Suedia', 'Novergia', 'Rusia']
}
console.log(`${tara.nume} are o populație de ${tara.populatia} milioane, 
capitala este ${tara.capitala} și vecinii sunt ${tara.vecini.join(', ')}.`)