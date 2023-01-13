// Scrieți un program care va avea un tablou de numere și va afișa suma numerelor pozitive și
// produsul numerelor negative. De exemplu dacă avem const tab=[1, 2, 3, -8, -5], suma va fi 
// 6 si produsul 40

const tab = [1, 2, 3, -8, -5]
let sum = 0, produsul = 1

for (i of tab) {
    if (i < 0) {
        produsul *= i
    } else if (i > 0) {
        sum += i
    }
}

console.log(`Suma - ${sum}
Produsul - ${produsul}`)