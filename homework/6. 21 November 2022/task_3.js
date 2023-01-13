// 3. Pentru tabloul dat, filtrați toate 
// elementele care încep cu den sau se termină cu ly

let items = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\n', 'dent']
filtrul = arr => arr.filter( el => el.match(/^den|ly$/))
console.log(filtrul(items))