// create a calculator app in JS that has different functions for each operation
// add, subtract, multiply, divide, square, square root
// each function should take in two parameters and return the result
// create a function called calculate that takes in three parameters
// the first two parameters should be numbers
// the third parameter should be a function that takes in two numbers
// call the third parameter passing in the first two parameters
// return the result


//var num = 0;
//var num1 = 0;
//var num2 = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num2 - num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "You can't divide by zero!";
    }
    return num1 / num2;
}

function square(num1) {
    return num1 * num1;
}

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function squareRoot(num1) {
    if (num1 < 0) {
        return "Invalid input. Square root of negative number is not a real number.";
    }
    return Math.sqrt(num1);
}

function power(num1, num2) {
    return Math.pow(num1, num2);
}

function modulus(num1, num2) {
    return num1 % num2;
}

function absolute(num1) {
    return Math.abs(num1);
}

// add module.exports
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    square,
    calculate,
    squareRoot,
    power,
    modulus,
    absolute
};