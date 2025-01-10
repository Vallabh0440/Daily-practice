// Create an array with the names of all the mobile phone models you have used so far. Then show the elements of that array as output one by one with a while loop */



let myMobiles = ["samsung","vivo","nokia","oppo","micromax"]

let index = 0;
while (index< myMobiles.length) {
    var myPhone = myMobiles[index]
    console.log(myPhone)
    index++;
}