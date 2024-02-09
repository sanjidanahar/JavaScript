/**
 * TERNARY ==> Three parts
 * 
 * ? :
 * condition ? do something when true : do something when false
 */

const age = 20;

// simple if-else

// if(age >= 18){
//     console.log("You can vote");
// }
// else{
//     console.log("You are not ready to vote, so you can leave.")
// }

// simple ternary 
// condition then true then false

// age >= 18 ? console.log("Vote dio") : console.log("Not allowed to vote")

let price = 5000;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price)


price = isLeader === true ? 0 : price + 1000;
console.log(price)



//OPTIONAL:  semi advannce ternary
if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else {
    price  = price + 100;
}

// feel free to ignre this one

price = isLeader === true ? price + 1000 ? price / 2 : 0 : price + 1000;



