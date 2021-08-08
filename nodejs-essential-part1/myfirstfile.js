let hello = "I am writing my first NodeJS program"

console.log(hello);

const path = require("path");

console.log(`The filename is ${path.basename(__filename)}`);

console.log(process.pid);

console.log(process.versions.node);

const [, , fname, lname] = process.argv;

console.log(`My Name is ${fname} ${lname}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);