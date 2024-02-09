/**
 * MULTI_LEVEL_CONDITIONS
 */

// const price = 5000;
const price = 9000;
if(price >= 5000){
    // 10 percent discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price > 2500){
    //5percent discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}