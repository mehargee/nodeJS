const path = require('path');
console.log(path.dirname('E:/node js thapa/pathModule/index.js'));
console.log(path.extname('E:/node js thapa/pathModule/index.js'));
console.log(path.basename('E:/node js thapa/pathModule/index.js'));
const myPath =path.parse('E:/node js thapa/pathModule/index.js');
console.log(myPath.name);