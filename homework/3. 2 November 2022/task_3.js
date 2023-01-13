// Scrieți un program care va avea un tablou de strings și va afișa toate elementele tabloului 
// într-un string.  De exemplu dacă avem const tab=["acum", "este", "toamna"], va afișa 
// "acum este toamna"

const tab = ["acum", "este", "toamna"]
let text = ''

for (i of tab) {
    text += (i + ' ')
}

console.log(text)