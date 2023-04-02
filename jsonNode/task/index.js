// 1. take object and convert into json,
// 2. then the data is save to other File,
// 3. read file data,
// 4. again convert back to Json object crossOriginIsolated,
// 5. then console the data.

const fs = require("fs");

const bioData = {
    name : 'asad',
    age : 27,
    college : 'GC Uni'
};

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//     console.log("data save");
// })

fs.readFile("json1.json", "utf-8", (err, data) => {
    const jsonObj = JSON.parse(jsonData);
    // object to json 
    console.log(data);
    //json  to object
    console.log(jsonObj);
});

