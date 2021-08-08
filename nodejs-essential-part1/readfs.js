const fs = require("fs");

//list files in directories

console.log("started reading files")
const files = fs.readdirSync("./lib");
console.log("complete")


console.log(files);

// list files asyncronusly
console.log("Now Asyncronus reading")
fs.readdir("./www", (err, fil) => {
    if (err) {
        console.log(`An error occured:: ${err.message}`);
        process.exit();
    }
    console.log("complete")
    console.log(fil);
});

console.log("started reading fil");

// reading files
console.log("Reading Context of the File");
console.log("===================");
console.log("Reading Syncronusly");
console.log("===================");
const text = fs.readFileSync("./ask.js", "UTF-8");

console.log(text);
console.log("===================");
console.log("Reading ASyncronusly");
console.log("===================");
fs.readFile("./core.js", "UTF-8", (err, txt) => {
    if (err) {
        console.log(`An error occured:: ${err.message}`);
        process.exit();
    }
    console.log("file content Read");
    console.log(txt);
});





