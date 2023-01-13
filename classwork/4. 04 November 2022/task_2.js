// Să scriem o funcție procentajPopulatie care ia ca parametru
// populația unei țări și returnează cât la sută din populația
// globului înseamnă acea valoare.
// Exemplu: Lumea are 7.900.000.000, iar China are
// 1.441.000.000 locuitori, deci vom afișa “Populația
// reprezintă 18.2% din glob. Putem lucra în milioane, deci
// considerăm populația globului 7900.

procentajPopulatie = populatia => (populatia * 100 / 7900).toFixed(1)
console.log(`Populatia reprezinta ${procentajPopulatie(1441)} din glob`)