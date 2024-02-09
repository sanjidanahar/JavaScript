const age = 17;
const price = 500;
if(age <= 12){
    console.log("You can eat for free");
}
else if(age >= 60){
    // 50 percent discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 50){
    // 25 percent discount

    const discount = price * 25 / 100;
    const payBill = price - discount;
    console.log(payBill);
}
else{
    console.log(price);
}