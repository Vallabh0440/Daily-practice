// Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(num1,num2,num3) {
    var avg = num1+num2+num3/3;
    return avg;
}

let newNum = make_avg(20,30,80);
console.log(newNum.toFixed(2))

