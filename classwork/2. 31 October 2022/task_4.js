// 4. 

let culori = ['galben', 'rosu', 'albastru', 'verde']
let maxim = culori[0].length
let word

for (let i = 0; i < culori.length; i++) {
    if (culori[i].length > maxim) {
        maxim = culori[i].length
        word = culori[i]
    }   
}

console.log(word)