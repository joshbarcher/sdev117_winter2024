//we can create variables using three keywords
var myVariable = 10;
let myOtherVar = 20;
const myConst = 30;
const pi = 3.14523; //magic numbers!

//the "really" wrong way
myNum = 40;

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