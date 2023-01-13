// 3. Exercițiul 3 - Palindrom
// Lui Olea îi plac numerele palindrom. Un număr este considerat palindrom 
// dacă răsturnatul său (citit de la dreapta la stânga) este egal cu originalul 
// (Exemplu: numărul 12321 este palindrom).

// Cerințe:
// Să se determine dacă o variabilă conține o valoare palindrom.
// Afișați în consolă numărul și un mesaj dacă acesta este sau nu palindrom.

// Вариант 1

function isPolindrom(str) {
    return str === str.split('').reverse().join('') ? true : false
    // 12321 => ['1', '2', '3', '2', '1'] 
}
console.log(`1. ${isPolindrom('12321')}`) // 12321 <=> 12321 - true

// Вариант 2 (записал функцию в одну строку)

isPolindrom = str => str === [...str].reverse().join('')
console.log(`2. ${isPolindrom('12322')}`)  // 12322 <=> 22321 - false

// a = [...a] && a = a.split('') - одно и тоже делают разбивают string на array