// 2. 

// O bibliotecă are mai multe cărți în componența sa, și anume: 6 titluri.
// 1. Să se afișeze numărul de cărți din registrul bibliotecii.
// 2. După primirea unor comenzi, să se adauge cărțile () și să se afișeze un mesaj 
// cu numărul actualizat și ce cărți au fost adăugate.
// 3. Cartea 1 are probleme de redactare și trebuie retrasă. Să se afișeze un mesaj 
// care comunică acest lucru și câte cărți sunt acum în bibliotecă.
// 4. Să se verifice dacă există cartea () în bibliotecă.

const biblioteca = ['Testament', 'Mesterul manole', 'Oltul', 'Padurea spanzuratiilor', 'Nigma otiliei', 'Povestea fara sfarsit']

console.log(`Numarul de carti: ${biblioteca.length}`)

let carteNoua = 'Colt alb'
biblioteca.push(carteNoua)
console.log(biblioteca)
console.log(`Sa adaugat pe pozitia ${biblioteca.indexOf(carteNoua) + 1} urmatoarea carte: '${carteNoua}'`)

let exclusa = biblioteca.shift()
console.log(`A fost extrasa urmatoarea carte: '${exclusa}'`)
console.log(`Numarul de carti dupa extragere - ${biblioteca.length}`)

let cautare = 'Ghost'
console.log(`Cartea urmatoare: '${cautare}' exista? - ${biblioteca.includes(cautare)}`)