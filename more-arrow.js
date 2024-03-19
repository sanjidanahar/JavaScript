const difference = (x , y) => x - y;
const multiply = (first, second, third) => first * second * third;


// single or one parameter
const getAge = (person) => person.age;  //implicit
const students = {name: 'ananta', age:45} //explicit
const age = getAge(students)
console.log(age);


const getThird = numbers => numbers[2]
const third = getThird([5,7,8,9,10])
console.log(third)



const doubleIt = num => num * 2;


// no parameter
const getPI = () => Math.PI
console.log(getPI)


// large arrow function. If you want to get anything returned from this function, then you have to use the return keyword.

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult
    return result
}