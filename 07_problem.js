// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’. b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];

indexOfbanana = fruits.indexOf("Banana");
console.log(indexOfbanana);

fruits[1] = "Mango";
// console.log(fruits);

fruits.pop()
// console.log(fruits)

fruits.push("Wateermelom");
console.log(fruits)