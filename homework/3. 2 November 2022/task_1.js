// 1. Scrieți un program care va avea un tablou de numere și va afișa suma numerelor din tablou. 
// De exemplu dacă avem const tab=[1, 2, 3] rezultatul va fi  = 6

const tab = [1, 2, 3]
let sum = 0

for (i of tab) {
    sum += i
}

console.log(`Rezultatul: ${sum}`)