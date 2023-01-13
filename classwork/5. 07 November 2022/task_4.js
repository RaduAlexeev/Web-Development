// Creați o funcție care va primi ca parametru un tablou de note și va returna media notelor.

function calculateMedia(arr) {
    let sum = 0
    for (i of arr) {
        sum += i
    }
    return sum / arr.length
}

console.log(calculateMedia([5, 8, 3, 9, 10, 5, 7, 8]))