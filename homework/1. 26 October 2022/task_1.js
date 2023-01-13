// 1. Scrieți un program JavaScript pentru a determina dacă un anumit an este un 
// an bisect în calendarul gregorian. 2004 - an bisect, 2005 - nu e an bisect

let year = 2004

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log('An bisect')
} else {console.log('Nu e an bisect')}