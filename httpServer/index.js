const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    //  res.end("Hello from the other side");
    if (req.url == "/") {
        res.end("Hello from the Home side");
    }
    else if (req.url == "/contact") {
        res.end("Hello from the contact side");
    }
    else if (req.url == "/about") {
        res.end("Hello from the about side");
    }
    else {
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>Error 404, Page not found</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening the port number 8000");
});