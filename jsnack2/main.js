// console.log('HI');

const firstWord = prompt('write a word');
const secondtWord = prompt('write a word');

let result

if (firstWord.length < secondtWord.length) {
    result = firstWord + ' ' + secondtWord
} else if (firstWord.length > secondtWord.length) {
    result = secondtWord + ' ' + firstWord
} else {
    result = 'same lenght'
};

console.log(result);
