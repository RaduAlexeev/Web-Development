// Creați o funcție care verifică dacă un număr este
// prim. Un număr este prim dacă este divizibil doar cu
// 1 și el însuși.

// Pentru un tablou de numere, afișați câte dintre
// acestea sunt prime.

// Варианта 1

function isPrime(number) {    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {return false}
    }
    return true
}

console.log(isPrime(2))