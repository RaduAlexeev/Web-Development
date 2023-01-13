// https://www.codewars.com/kata/56c19316e8b139dff60006da/train/javascript

/*  Write your program/code/algorithm here.
 *  If you're really stuck as to what exactly to define, go to the
 *  "Description" and click on the pseudo-link to reveal the answer
 */

String.prototype.capitalize = function() {
    return [...this].map(el => !'?,!.'.includes(el) ? el : [...el + '~'])
                    .flat(1)
                    .join(' ')
                    .split(/[~]\s/gi)
                    // .map(el => el.replace(/^[a-zA-Z0-9]/, el.charAt(0).toUpperCase()))
                    // .join(' ')
}

console.log("hello how are you? i am john doe, r dsdvsdfsd! dcds sss ... ....".capitalize())

// Знаки препинания удаляются, как их оставить?

// let text = "hello how are you? i am john doe, r dsdvsdfsd! dcds sss"

// let newText = [...text].map(el => !'?,!.'.includes(el) ? el : el + '~')
// console.log(newText.join(''))