const person = {
    name : 'sodor uddin',
    age : 25,
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav places' : ['bandorban','kuyakata','khagrachori']
}
// console.log(person)


//dot notation
//dot symbol diye object er property er value access kora

console.log(person.profession)   //akhane ata use korle sudhu atai dekhabe
const income = person.salary;
// console.log(income)


//bracket notation
//third bracket diye access kora
console.log(person['age'])
const boyos = person['age']
console.log(boyos)


console.log(person["fav places"])  // akhane bracket na dile output show korbe na karon ata string

const keyName = 'profession';
console.log(person[keyName])