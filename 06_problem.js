// You are rushing to school, but when you are about to cross the road, you see the traffic signal is red. In this situation, if you try to cross the road, it can be dangerous. If the signal is yellow, you should stop. And if the traffic signal is green, you should cross the road. So, write a code where we have a variable named signal. Its value can be green, yellow, or red. Depending on the value, different actions will be performed. Write that code quickly.

// let signal = "red";

// if (signal == "red") {
//     console.log("signal is red you should stop")
// }else if(signal == "yellow"){
//     console.log("signal is yellow you should wait")
// }else if(signal == "green"){
//     console.log("signal is green you can go")
// }


let signal ="green";

switch (signal) {
    case "red":
        console.log("signal is red you should stop")
        break;

        case "yellow":
        console.log("signal is yellow you should wait")
        break;

        case "green":
        console.log("signal is green you should go")
        break;

    default:
        break;
}

