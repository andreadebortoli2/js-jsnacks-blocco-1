// console.log('HI');

const list = ['aa','bb','cc','dd'];

const nameToCheck = prompt('write your name');

let answer = 'Access not allowed';

for (let i = 0; i < list.length; i++) {
    const check = list[i];
    console.log(check);

    if (check == nameToCheck) {
        answer = `welcome ${nameToCheck}`
        break;
    }
    
};

console.log(answer);