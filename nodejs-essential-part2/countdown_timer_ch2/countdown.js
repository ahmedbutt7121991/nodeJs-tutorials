#!/usr/bin/env node

const parseArgs = require("minimist");
const { stdout: log } = require("single-line-log");
const Timer = require("tiny-timer");
//
// Collect the time from argv
//

const { time } = parseArgs(process.argv);

if (!time) {
    throw new Error("--time is required as an argument");
}

if (!parseInt(time)) {
    throw new Error("--time must be an Integer");
}

console.log(time);

//
// Print starts in-line
//

const count = parseInt(time);
let message = "";

for (let i = 0; i < count; i++) {
    message += "*";

}


/*setTimeout function is to create a delay of 2sec (2000)
setTimeout(() => {
    log("Overwritting MESSAGE")
}, 2000);
*/

//
// Run timer and remove stars
//

const timer = new Timer({ interval: 1000});

timer.on("tick", () => {
    log(message);
    message = message.slice(1);
});

timer.start(count * 1000);