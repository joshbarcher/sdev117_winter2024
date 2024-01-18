//ask the user for a few numbers
let num1 = prompt("Enter a number");
let num2 = prompt("Enter a number");

console.log(typeof num1);

//to convert from a string to a number, we use parseInt() or parseFloat()
num1 = parseFloat(num1);
num2 = parseFloat(num2);

//do some arithmetic
const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
const mod = num1 % num2; //remainder
const exp = num1 ** num2; //exponent

console.log(typeof sub);

//print out the results (using string-template literals)
console.log(`The result of ${num1} + ${num2} = ${add}`);
console.log(`The result of ${num1} - ${num2} = ${sub}`);
console.log(`The result of ${num1} * ${num2} = ${mult}`);
console.log(`The result of ${num1} / ${num2} = ${div}`);
console.log(`The result of ${num1} % ${num2} = ${mod}`);
console.log(`The result of ${num1} ** ${num2} = ${exp}`);

//data types
const numbers = 10; //all numbers, integers and floating point values
const booleans = true;  //true or false
const strings = "hello"; //you can use "", '', ``

const objects = {
    type: "checking",
    balance: 2000.0,
    acctNum: 1012312312
};

const arrays = ["red", "yellow", "white", "blue"];

//special values
const nullValue = null; //a missing value
const undefinedValue = undefined; //something that's undefined
const notANumber = NaN; //something that can't be a number

//a variable's value can change over time
let value = 10;
value = "something else";
value = true;
value = {};