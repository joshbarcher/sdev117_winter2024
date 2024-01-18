//three ways to get input/outputs in a JS program

//1. Browser console (aka console.log(...))
console.log("Sending output to the terminal is easy!");
//there is no *default* way to get inputs on the terminal

//2. Dialog boxes = (alert, prompt, confirm)
/*alert("Message in a popup box!");
const message = prompt("Enter a message");
const shout = confirm("Should I shout it?");

if (shout === true) {
    console.log(message.toUpperCase());
} else {
    console.log(message.toLowerCase());
}*/

//3. Directly through HTML (our goal!!!)
const messageTextbox = document.querySelector("#message");
const shoutTextbox = document.querySelector("#shout");

console.log(messageTextbox.value);
console.log(shoutTextbox.value);

//there is a difference between "true" and true
if (shoutTextbox.value === true) {
    console.log(messageTextbox.value.toUpperCase());
} else {
    console.log(messageTextbox.value.toLowerCase());
}

//JavaScript is loosely typed
let value = "Hello";
value = 10;