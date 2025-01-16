// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

let myValue = [1,2,3,4];

function make_avg(num1,num2) {
    var addOf = num1[0]+num1[1]+num1[2]+num1[3];
    var avgOf = addOf/num2;
    return avgOf;
}

var totalAvg = make_avg(myValue,make_avg.length);
console.log(totalAvg)