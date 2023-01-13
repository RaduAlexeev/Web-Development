// Îmbinăm exercițiile 1 și 2 și afișăm atât descrierea
// unei țări, cât și procentajul din populația globală
// folosindu-ne de funcțiile create.

function descriereTara(nume, populatie, capitala) {
    console.log(`${nume} are o populatie de ${populatie} milioane locuitori si capitala este ${capitala}.`) 
    console.log(`Populatia reprezinta ${procentajPopulatie(populatie)}% din glob.`)
}
procentajPopulatie = populatia => (populatia * 100 / 7900).toFixed(3)
descriereTara('Moldova', 2.5, 'Chisinau')