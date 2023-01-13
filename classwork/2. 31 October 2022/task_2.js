// 2. Pentru un tablou de elemente, afișați dacă numărul este par, impar sau zero.

let tablou = [1, 7, 2, 4, 2, 9, 0, 45, 23]

for (i of tablou) {
    if (i % 2 === 0 && i !== 0) {
        console.log('Numar par - ', i)
    } else if (i % 2 !== 0) {
        console.log('Numar impar - ', i)
    } else if (i === 0) {
        console.log('Numar zero - ', i)
    }
}

console.log()

for (let i = 0; i < tablou.length; i++) {
    if (tablou[i] % 2 === 0 && tablou[i] !== 0) {
        console.log('Numar par - ', tablou[i])
    } else if (tablou[i] % 2 !== 0) {
        console.log('Numar impar - ', tablou[i])
    } else if (tablou[i] === 0) {
        console.log('Numar zero - ', tablou[i])
    }
}