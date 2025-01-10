// Write a function that returns the multiplication table of 13 as output.

var baseAmt = 13;

function multiplicationOf13(){
    for(i = 1; i <= 10 ; i++ ){
        // console.log(baseAmt, "*" , i ,"=",baseAmt*i)
        console.log(`${baseAmt} * ${i} = ${baseAmt*i} `)
    }
}
multiplicationOf13()