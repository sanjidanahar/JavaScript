// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

// const example
const money = 25;
const rich = 50;
console.log(rich);


// let example
let count = 0;
count = count + 10;
console.log(count);


const numbers = [14, 15, 17, 20, 22];
numbers[1] = 12;
numbers.push(8,9,30);
console.log(numbers);


// object

const students = {
    name: 'Sanjida Nahar',
    class: 15
}

// reassign korle let use korte hbe const use korle reassign kora jabe na 
// students = {name: 'Sathy Moni'} 


// const thakeleo property name change kora jabe
students.name = 'Sanju'
console.log(students);


// loop

let sum =0;
for(let i=0; i<10; i++){
    const num = i;
    sum = sum + num;
}
console.log(sum);