// Folosim funcția de la exercițiul precedent și afișăm în dependență de media notelor dacă studentul este eminent(media >= 9),
// bravo(media < 9 și > 5) și repetent(media<5)

const tab = [5, 8, 3, 9, 10, 5, 7, 8]
const mark = tab.reduce((firstNumber, secondNumber) => firstNumber + secondNumber, 0) / tab.length
isEminem = media => media >= 9 ? "Eminent" : media > 5 && media < 9 ? "Bravo" : "Repetent";
console.log(isEminem(mark))