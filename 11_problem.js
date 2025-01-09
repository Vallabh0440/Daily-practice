
// Practice Challenge-1
// What are your daily tasks?

// Unlock the module at 8 PM.
// Quickly watch the videos and practice along.
// Take notes while watching the videos.
// Once the module is completed, practice the entire module on your own.
// If you don’t understand something (remember, there’s a condition here), join the support session.
// Now, your task is to run a for loop 5 times to display the above items as output.


let myDailyTask = ["1.Unlock the module at 8 PM.","2.Quickly watch the videos and practice along.",
    "3.Take notes while watching the videos.","4.Once the module is completed, practice the entire module on your own.","5.If you dont understand something (remember, there is a condition here), join the support session."
];

for (let i = 0; i < myDailyTask.length; i++) {
    const element = myDailyTask[i];
    console.log(element)
}