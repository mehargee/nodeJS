const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
   const data = fs.readFileSync('jsonAPI.json', "utf-8");
   const objData = JSON.parse(data);

    if (req.url == "/") {
        res.end("Hello from the Home side");
    }
    else if (req.url == "/contact") {
        res.end("Hello from the contact side");
    }
    else if (req.url == "/about") {
        res.end("Hello from the about side");
    }
    else if (req.url == "/jsonapi") {
      //  res.end("Hello from the jsonApi side");
        // fs.readFile('jsonAPI.json', "utf-8", (err, data) => {
        //     console.log(data);
            // res.end(data);
        // });
        res.writeHead(200, { "Content-type" : "application/json" });
        res.end(objData[0].attributes);
    }
    else {
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>Error 404, Page not found</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening the port number 8000");
});