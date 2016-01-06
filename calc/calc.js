
var readline = require('readline-sync'),
    firstNumber = parseFloat(readline.question('Please enter the first number: ')),
    secondNumber = parseFloat(readline.question('Please enter the second number: ')),
    operator = readline.question('Please enter an operator: ');

if (operator === '+') {
    console.log(firstNumber + secondNumber);
} else if (operator === '-') {
    console.log(firstNumber - secondNumber);
} else if (operator === '*') {
    console.log(firstNumber * secondNumber);
} else if (operator === '/') {
    console.log(firstNumber / secondNumber);
}
