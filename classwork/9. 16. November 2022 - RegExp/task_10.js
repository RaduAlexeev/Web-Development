// 1.Pentru tabloul dat, filtrați toate elementele care nu conțin e .
// let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

const resultItem = arr => arr.filter( el => !/e/.test(el) )

console.log(resultItem(items))

// 2. Înlocuiți prima apariție a lui 5 cu cinci pentru șirul dat.
// let ip = 'They ate 5 apples and 5 oranges'

