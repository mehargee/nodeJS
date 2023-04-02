const fs = require("fs");
// fs.writeFile("read.txt","this is Async file ", 
// () => {
//     console.log("file is created");
// });

// add more data in file 
// fs.appendFile("read.txt"," , more data is added ", 
// (err) => {
//     console.log("data added");
// });

// read data in file 
// fs.readFile("read.txt", "UTF-8", 
// (err, data) => {
//     console.log(data);
// });

//chanllege Async
// 1. create a folder with your name 
// fs.mkdir("asad", (err) => {
//     console.log('folder creater');
// })
// 2. insde folder create a file read.txt
// fs.writeFile('asad/read.txt', "This challenge will be fine", (err) => {
//     console.log('file is created')
// })
// 3. add more data into the file 
// fs.appendFile('asad/read.txt', ' extra data is added', (err) => {
//     console.log('data added');
// })
// 4. read data from file without using buffer
// fs.readFile('asad/read.txt','utf-8',(err , data) => {
//     console.log(data);
// })
// 5. rename the file 
// fs.rename('asad/read.txt','asad/readIt.txt', (err) => {
//     console.log('file name is updated');
// })
// 6. delete both file and folder 
// fs.unlink('asad/readIt.txt', (err)=>{
//     console.log('file deleted');
// })
// fs.rmdir('asad', (err)=> {
//     console.log('folder deleted')
// })

