const fs = require("fs");

const md = `
    #This is a new file
    We can write text to a file with fs.writefile


    *fs.readdir
    *fs.readFile
    *fs.writeFile
`;
console.log("------------")
console.log("Create Files")
console.log("------------")
fs.writeFile("./notes.md", md.trim(), err => {
    if (err) {
        throw err;
    } else {
        console.log("File Saved..")
    }
});

console.log("-----------------")
console.log("Create Directory")
console.log("-----------------")

if (fs.existsSync("storage-files")) {
    console.log("Directory Already exists..")
}else{
    fs.mkdir("storage-files", err => {
        if (err){
            throw err;
        }else{
            console.log("Directory Created...")
        }
    });
}

