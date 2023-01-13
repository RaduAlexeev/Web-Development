// 4. Scrieți un program care va determina cel mai mare divizor comun a doua numere a, b

let a = 12
let b = 32

for (let n = 0; n <= Math.max(a, b); n++) {
    if (a % n == 0 && b % n == 0) {
        console.log(n)
    } 
}