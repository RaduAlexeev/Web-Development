// 2. Exercițiul 2 - Calculator de tips
// Carolina vrea să aibă un calculator de tips pentru că atunci când iese la 
// restaurant vrea să știe cât trebuie să plătească în funcție de totalul de 
// pe bon. În localurile în care merge ea, valoarea tips este de 15%, dacă 
// nota este între 50 și 800 lei, și de 20% dacă nota este peste 800 lei.

// Cerințe:
// Calculați valoarea pentru tips în funcție de totalul notei.
// Afișați în consolă cât este valoarea notei, cea pentru tips și totalul de plătit.

function getCheck(price) {
    if (price >= 50 && price <= 800) {
        price = (price * 85) / 100 
    } else if (price > 800) {
        price = (price * 80) / 100
    }
    
    return price
}

console.log(`Voloarea notei: ${getCheck(2000)} lei`)