// 1. Exercițiul 1 - Cuvinte
// Avem un array care conține mai multe cuvinte. 
// Pentru fiecare cuvânt, să se afișeze numărul 
// total de litere, numărul vocalelor și cel al consoanelor.

// Varianta 1
// function getVowelsOrConsCount(str, dictOfLetters) {  // str = 'Eu', dictOfLetters = 'aeuio'
//     let count = 0
//     for (letter of str.toLowerCase()) { 
//         if (dictOfLetters.includes(letter)) {
//             count++ 
//         } 
//     }
//     return count
// }

// function getLibrary(array) { // array = ['Eu', 'fac', 'ce', 'vrau']
//     const library = new Object()
//     // library = {}
//     for (let i = 0; i < array.length; i++) { // 0 1 2 3
//         library[i] = new Object() // library {0: {}}
//         library[i].word = array[i] // library {0: {word: 'Eu'}}
//         library[i].lettersCount = array[i].length 
//         // library {0: {word: 'Eu', lettersCount: 2}}
//         library[i].vowelsCount = getVowelsOrConsCount(array[i], 'aeuio') 
//         // library {0: {word: 'Eu', lettersCount: 2, vowelsCount: 2}}
//         library[i].consonantCount = getVowelsOrConsCount(array[i], 'bcdfghjklmnpqrstvwxyz')
//         // library {0: {word: 'Eu', lettersCount: 2, vowelsCount: 2}, consonantCount = 0}
//     }
//     return library
// }        

// function showLibrary(library, array) {
//     let i = 0
//     while (i < array.length) {
//         console.log('Cuvantul:', library[i].word)
//         console.log('Litere:', library[i].lettersCount)
//         console.log('Vocale:', library[i].vowelsCount)
//         console.log('Consoane:', library[i].consonantCount, '\n')
//         i++
//     }
// }

// let text = ['Eu', 'fac', 'ce', 'vrau']
// console.log('Textul:', text.join(' '), '\n')
// showLibrary(getLibrary(text), text)


// Varianta 2 (mai scurta)

// function vowelsCount(str) {
//     vowels = 'aeuio'
//     let count = 0
//     for (i of str.toLowerCase()) { if (vowels.includes(i)) { count++ } }
//     return count
// }

// function getLibrary(array) {
//     const library = new Object()
//     for (let i = 0; i < array.length; i++) {
//         library[i] = new Object()
//         library[i].word = array[i]
//         library[i].lettersCount = array[i].length
//         library[i].vowelsCount = vowelsCount(array[i]) 
//         library[i].consonantCount = array[i].length - vowelsCount(array[i])
//     }
//     return library
// }        

// const showLibrary = getLibrary(['Eu', 'fac', 'ce', 'vrau'])
// console.log(Object.values(showLibrary))


// Varianta 3

const listOfWords = ['toamna', 'brad', 'pizza', 'flori', 'soare', 'roz'] 

function exerciul1(tablou) {
    let numaratoarea = 0;
    let vocale = 'aeiou';

    for (cuvant of tablou) {
        for (litera of cuvant) {      
            if (vocale.includes(litera)) {
                numaratoarea += 1            
            }
        }
        console.log(`Cuvantul: ${cuvant} \nLitere: ${cuvant.length}`)   
        console.log(`Vocale ${numaratoarea} \nConsoane: ${cuvant.length - numaratoarea}\n`)   
        numaratoarea = 0   
    }
}

exerciul1(listOfWords)