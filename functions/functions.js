//call the function
for (let i = 1; i <= 10; i++) {
    genNum();
}

for (let i = 1; i <= 10; i++) {
    genRandomNum(3, 7);
}

let sum = add(1, 2, 3);
console.log(`1 + 2 + 3 = ${sum}`);

sum = add(4, 5, 6);
console.log(`4 + 5 + 6 = ${sum}`);

const num1 = returnRandom(1, 10);
const num2 = returnRandom(1, 10);
const num3 = returnRandom(1, 10);

sum = add(num1, num2, num3);
console.log(`${num1} + ${num2} + ${num3} = ${sum}`);

//keep my functions below
//-----------------------

//define the function

//event handling with anonymous functions
const button = document.querySelector("button");
button.onclick = function() {
    //this code would run when the event happens
}

//arrow functions (aka lambda functions)
const mult = (a, b) => a * b;

const multiplied = mult(3, 5);

//generate random floating point numbers as percentages
function genNum() {
    console.log("Random number");
    console.log(Math.random());
}

//generate a random integer in the range [low, high] 3-7
function genRandomNum(low, high) {
    const valuesInRange = high - low + 1;

    //generate a value in range, rounding down
    const num = Math.floor(Math.random() * valuesInRange) + low;

    console.log(num);
}

function returnRandom(low, high) {
    const valuesInRange = high - low + 1;
    return Math.floor(Math.random() * valuesInRange) + low;
}

function add(one, two, three) {
    const result = one + two + three;
    return result;
}