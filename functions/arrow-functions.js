
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

const isOdd = num => num % 2 === 1;

const even = isEven(10);
const odd = isOdd(11);

console.log(even);
console.log(odd);

//create a few functions to help us print values
const print = msg => console.log(msg); 
const shout = msg => console.log(msg.toUpperCase());
const whisper = msg => console.log(msg.toLowerCase());
const printFrom = (msg, sender) => console.log(`From ${sender} - ${msg}`);

print("Hello, world!");
shout("Hello, world!");
whisper("Hello, world!");
printFrom("Hello, world!", "Josh");

//create a few functions to perform arithmetic
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
const exp = (a, b) => a ** b;

const concat = (a, b) => a + " - " + b;

calculator(mult, 3, 13);
calculator(exp, 2, 6);
calculator(concat, "Hello", "Celina");

//create a calculator that uses them
function calculator(func, a, b) {
    let result = func(a, b);
    console.log(`Result is ${result}`);

    if (result < 0) {
        console.log("The result is negative");
    } else if (result > 0) {
        console.log("The result is positive");
    }
}