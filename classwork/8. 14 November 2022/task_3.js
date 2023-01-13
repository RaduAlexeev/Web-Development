// Pentru obiectul țară, creați metoda “descriere” care va afișa același mesaj.

const tara = {
    nume: 'Finlanda',
    capitala: 'Helsinki',
    populatia: 4,
    vecini: ['Suedia', 'Novergia', 'Rusia'],
    descriere: () => `${tara.nume} are o populație de ${tara.populatia} milioane, capitala este ${tara.capitala} și vecinii sunt ${tara.vecini.join(', ')}.`
}

console.log(tara.descriere())