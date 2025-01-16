// You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up

let signal = "green";

if(signal == "red" ){
    console.log("you should wait")
}else if(signal == "yellow"){
    console.log("get ready to go")
}else if (signal == "green"){
    console.log("you can go")
}


let color = "green"

switch(color){
    case "red":
        console.log("you should wait");
        break;

    case "yellow":
        console.log("get ready to go");
        break;
        
    case "green":
        console.log("you can gooo");
        break;
        
        default:
            console.log("wrong color")
}

