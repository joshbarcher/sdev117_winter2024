/*
    This file has some introductory JS code. We are 
    learning about variables and comment.

    Author: Josh Archer
    Date: 1/18/2024
    Filename: variables.js
*/

//we can create variables using three keywords
var myVariable = 10;
let myOtherVar = 20;
const myConst = 30;
const pi = 3.14523; //magic numbers!

//we will use camel-case for all variables/functions and other things
let myAmazonOrder = "package";

//other conventions we will not use
let snake_case = "snakes";
let PascalCase = "uppercase";
let UPPER_CASE = "constants";

/* 
    Many lines
    with comments
    ...
*/

//is JavaScript case-sensitive
console.log(myamazonorder);

//the "really" wrong way
//myNum = 40;
//location = "Seattle";

//var (old way) vs. let (new way)
let message;
if (myVariable == 10) {
    message = "Number is 10";
} else {
    message = "Number is not 10";
}

console.log(message);

//print out my constant
console.log(myConst);
myConst = 70; //try to reassign
console.log(myConst);