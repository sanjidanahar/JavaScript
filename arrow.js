/*
function add(a, b){
    const result = a + b;
    return result;
}
const sum = add(5, 30);
console.log(sum);
*/


function add(a, b) {
    // const result = a + b;
    return a + b;
}


// function expression
const add2 = function(a , b){
    return a + b;  
}

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const add5 = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;

// const sum = add(5, 30);
// const sum = add4(4, 5, 7 ,6);
const multiply = add5(4, 5, 7 ,6);
console.log(multiply);