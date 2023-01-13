// 3.

// Să scriem o funcție care verifică dacă un număr trimis ca 
// parametru este divizibil cu 7. Să se verifice pentru 17, 28, 44, 56, 57.

function numarDivizibil(n) {
    if (n % 7 === 0) {
        return console.log(n)
    }
}

function table(info) {
    for (i of info) {
        numarDivizibil(i)
    }
}

table([17, 28, 44, 56, 57])