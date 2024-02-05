const person = {
    name : 'sodor uddin',
    age : 25,
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav places' : ['bandorban','kuyakata','khagrachori']
}


//update value korce
person.salary = 35000;
person['age'] = 35;
person['fav places'] = ['USA','America','Vutan',"Soudi-Arabia"]
console.log(person)

const propName = 'profession';
person[propName] = 'devops'
console.log(person)