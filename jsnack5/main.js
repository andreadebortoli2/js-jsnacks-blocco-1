// console.log('HI');

let numbersList = [];

for (let i = 0; i < 6; i++) {
    
    const number = Number(prompt('write a number'));
    
    if (number % 2 === 1) {

        numbersList.push(number);
    };

    console.log(numbersList);

};



/*
let i = 0;

let numbersList = [];

while (i < 6) {
    const number = Number(prompt('write a number'));
    
    if (number % 2 === 1) {

        numbersList.push(number);
    };
    
    console.log(numbersList);
    
    i++
};
*/