/*  If you have more than 80000 Taka you will buy a macbook,
if the ammount is more than 60000 you will buy a gamming laptop, if the amount is more than 40000 you will buy a lenovo yoga. If the amount is 20000 taka then you buy a secondhand laptop. Otherwise you will use a smart phone. Now solve the problem. */


let ammount = 10000;

if (ammount > 80000) {
    console.log("i got mac")
} else if(ammount > 60000) {
    console.log("i got gamming laptop")
}else  if(ammount > 40000){
    console.log("i got lenovo yoga")
}else if (ammount > 20000){
    console.log("i got secondhand laptop")
}else{
    console.log("you can use smart phone")
}