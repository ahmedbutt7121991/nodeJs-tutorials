const fs = require("fs");


const colorData = require("./colors.json");

colorData.colorList.forEach(
    c => {
        fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex}\n`, err => {
            if (err) {
                throw err;
            }else{
                console.log("File is Appended..");
            }
        });
    }
);

fs.readFile("./storage-files/colors.md", "UTF-8", (err, color) => {
    if (err) {
        throw err;
    }else{
        console.log("Reading File..");
        console.log(color);
    }
});

console.log("Rename file--Rename Dir-Rename as a move file")

fs.rename("./notes.md", "./notesnp.md", err => {
    if(err){
        throw err;
    }
});

fs.rename("./node-v14.17.4-linux-x64.tar.xz", "./storage-files/node-v14.17.4-linux-x64.tar.xz", err => {
    if (err){
        throw err;
    }
});

fs.rename("./test", "./notest", err => {
    if(err)
    {
        throw err;
    }
});

fs.unlink("./storage-files/colors.md", err => {
    if(err){
        throw err;
    }
});

const files = fs.readdirSync("./storage-files");
console.log(files);
fs.rmdir("./notest", err => {
    if(err){
        throw err;
    }
});

