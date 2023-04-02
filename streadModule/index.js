const fs = require("fs");
const http = require("http");

const server = http.createServer();
//Note: data , end , and error are the builtin stream sting.
// server.on("request", (req, res) => {
//     //Method: using stream read data from file
//     const rstream = fs.createReadStream("input.txt");
//     //chunkdata instead of use any variable name.
//     rstream.on("data", (chunkdata) => {
//         res.write(chunkdata);
//     });
//     rstream.on("end", () => {
//         res.end();
//     });
//     rstream.on("error", (err) => {
//         console.log(err);
//         res.end("file Not found");
//     });
// });

// 2nd way , jo hum ne upar kia hai uski jaga ye b use kr skty hain,
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);

});
server.listen(8000, "127.0.0.1");