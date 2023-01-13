// Să scriem o funcție descriereTara care ia ca
// parametri nume, populatie și capitala și afișează un
// mesaj de descriere a țării.
// Exemplu: Finlanda are o populație de 6 milioane
// locuitori și capitala este Helsinki.


// Вариант 1
function descriereTara(nume, populatie, capitala) {
    console.log(`${nume} are o populatie de ${populatie} milioane locuitori si capitala este ${capitala}.`)
}
descriereTara('Finlanda', 6, 'Helsinki')

// Вариант 2
descriereTara = (nume, populatie, capitala) => {console.log(`${nume} are o populatie de ${populatie} milioane locuitori si capitala este ${capitala}.`)}
descriereTara('Finlanda', 6, 'Helsinki')