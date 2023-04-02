// const oper = require('./operator')
// console.log(oper.add(10,25));
// console.log(oper.sub(20,5));

// object destructring 
const {add , sub, mul, name} = require('./operator')
console.log(add(10,25));
console.log(sub(20,5));
console.log(mul(5,5));
console.log(name);