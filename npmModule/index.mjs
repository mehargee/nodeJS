import chalk from "chalk";
import validator from 'validator';
// rest of your code goes here


// console.log(chalk.blue.inverse.underline('Hello world!'));

const res = validator.isEmail('mehrgee@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));