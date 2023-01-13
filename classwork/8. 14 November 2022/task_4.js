// Scrieți un program care va afișa valorile următorului obiect în 
// formatul “${title} by ${author} - ${readingStatus}”: 
// De ex: 
// The Road Ahead by Bill Gates - reading
// The Road Ahead by Steve Jobs - not reading

const library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
},
{
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: false
},
{
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
}]

let afisare = arr => arr.map( el => console.log(`${el.title} by ${el.author} - ${el.readingStatus ? 'reading' : 'not reading'}`))
afisare(library) 