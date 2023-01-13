// 2. Exercițiul 2 - Tablouri palindrom
// Olea s-a entuziasmat și mai tare cu numerele palindrom și vrea să 
// țină o evidență cu acestea. Ea s-a gândit să facă o listă cu toate 
// numerele palindrom până la 10000 ca să îi fie mai ușor să le găsească mai târziu.

// Cerințe:
// Folosiți implementarea anterioară pentru palindrom și includeți-o într-o funcție
// Folosiți funcția pentru a verifica numerele care sunt palindrom
// Creați un array care să conțină numerele palindrom.
// Afișați numerele din array în consolă.



isPolidrom = integer => String(integer) === String(integer).split('').reverse().join('')

function getPolindrom(array) {
    for (let i = 1; i < 10000; i++) {
        if (isPolidrom(i)) {
            array.push(i)
        }
    }
    return array
}
const showPolindrom = getPolindrom([])
console.log(showPolindrom)                                            