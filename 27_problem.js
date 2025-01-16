// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways: Has return+ Has parameter No return+Has parameter

function odd_even(num){
    if (num % 2 == 0) {
        return (`${num} is even number`)
    } else {
        return (`${num} is not an even number`)
    }
}
let randomNum = odd_even(10);
console.log(randomNum);


function odd_even (num){
    if(num % 2 == 0){
        console.log(`${num} is even number`);
    }else console.log(`${num} is not an even number`);
}

odd_even(7)