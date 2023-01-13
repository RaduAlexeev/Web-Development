// 3. Scrieți un program JavaScript pentru a verifica două numere date și a returna
// adevărat dacă unul dintre numere este 50 sau dacă suma lor este 50.

let firstNumber = 25, secondNumber = 50

if (firstNumber + secondNumber == 50) {
    console.log(true)
} else if (firstNumber == 50 || secondNumber == 50) {
    console.log(true)
} else {
    console.log(false)
}