function validParentheses(parens) {
    let numaratoarea = 0
    for (let i = 0; i < parens.length; i++) {
        if (parens.charAt(i) === '(') {
            numaratoarea++
        } else {
            numaratoarea--
        }
        if (numaratoarea < 0) {
            return false
        }
    }

    if (numaratoarea === 0) {
        return true
    } else {
        return false
    }
}

// function validParentheses(parens){
//     let  indent = 0;
    
//     for (var i = 0 ; i < parens.length && indent >= 0; i++) {
//       indent += (parens[i] == '(') ? 1 : -1;    
//     }
    
//     return (indent == 0);
// }

console.log(validParentheses('')) //true
console.log(validParentheses('(')) //false
console.log(validParentheses(')(')) // false
console.log(validParentheses('()')) // true
console.log(validParentheses('(((()()(')) //false