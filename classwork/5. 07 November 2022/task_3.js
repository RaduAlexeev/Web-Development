const culori = ['alb', 'negru', 'albastru', 'verde', 'sur']
const filterd = culori.filter(el => el.startsWith('a'))

console.log(filterd)

const indexSort = culori.filter((element, index) => index % 2 === 0)

console.log(indexSort)