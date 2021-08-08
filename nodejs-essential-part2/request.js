const https = require("https");
const fs = require("fs");

const request = https.get(
    "https://en.wikipedia.org/wiki/Charlie_Brown",
    res => {
        let download = fs.createWriteStream("./Charlie_Brown.html");
        res.pipe(download);

        res.on("end", () => {
            console.log("Response Finished: Wiki page downlaoded ...")
        });
    }
);

request.end();
/*const options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/Snoopy",
    method: "GET"
};

const request = https.request(options, res => {
    let responseBody = "";
    res.setEncoding("UTF-8");

    res.on("data", data => {
        console.log("----chunks-----", data.length);
        responseBody += data;
    });

    res.on("end", () => {
        fs.writeFile("./snoopy.html", responseBody, err => {
            if (err) {
                throw err;
            }
            console.log("=====> File Downloaded......");
        });
    });
});

request.end();
*/