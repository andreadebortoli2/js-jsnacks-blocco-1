// console.log('HI');

const number = prompt ('write a four digit number');

const list = number.split('')

console.log(list);

let sum = 0

/*
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    
    sum += Number(element)

}
*/

let i = 0

while (i < list.length) {
    const element = list[i];
    
    sum += Number(element);

    i++
}
console.log(sum);