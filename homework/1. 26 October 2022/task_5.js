// 5. Scrieți un program JavaScript pentru a găsi tipurile unui unghi dat.
//   Tipuri de unghiuri:
// • Unghi ascuțit: Un unghi între 0 și 90 de grade.
// • Unghi drept: Un unghi de 90 de grade.
// • Unghi obtuz: Un unghi între 90 și 180 de grade.
// • Unghi  arbitrar: Un unghi de 180 de grade.

let grade = 180

if (grade > 0 && grade < 90) {
    console.log('Unghi ascuțit')
} else if (grade === 90) {
    console.log('Unghi drept')
} else if (grade > 90 && grade < 180) {
    console.log('Unghi obtuz')
} else if (grade === 180) {
    console.log('Unghi arbitar')
}