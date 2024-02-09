const salary = 35000;
const isBCS = true;
const height = 61;
const hasCar = false;  

//"single = mane man set kora ar double == dile man compare kora"

//AND thakle dutoi fullfill korte hbe nahlei error
if(salary > 20000 && height > 60){
    console.log('Su------patro');
}
else{
    console.log("onno Patro khuji");
}


//OR thakle minimum akta fullfill korte hbe maximum 2ta
if(salary > 25000 || height > 72){
    console.log('Asho baba Kobul');
}
else {
    console.log('Jao baba Mokbul');
}


//more and more condition   (minimum akta fillup korlei hbe)
if(salary > 25000 || height > 72 || isBCS == true){
    console.log('Lets start biye');
}
else{
    console.log('Cancle biye');
}



//3 conidtion in and  (sob guloi fillup korte hbe)
if(salary > 25000 && height > 72 || isBCS == true){
    console.log('Lets start biye');
}
else{
    console.log('Cancle biye');
}


//----------COmplex Condition----------
if((salary > 25000 && hasCar == true || isBCS == true)){
    console.log('tomar 14 gusti raji hoileo biye korbo na');
}



