// 1.Pentru tabloul dat, filtrați toate elementele care nu conțin e .

let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
filtrul = (arr) => arr.filter( el => !el.match(/e/))
console.log(filtrul(items))