//let's write some JavaScript code!
let name = 'Josh';

//send output through a popup (dialog boxes)
//alert('My name is ' + name);

//send output using the terminal
console.log('Hello, browser console');

//send output directly to the HTML
let nameParagraph = document.querySelector('footer > p');
console.log(nameParagraph);
nameParagraph.innerHTML = 'Page built by: Josh';

//print different types of messages using the console object
console.error('Something went terribly wrong');
console.info('Informational message');

//put together my full name and print it
let fName = "Josh";
let lName = "Archer";
let middle; //forgot to  assign my variable

console.log(fName + " " + middle + ". " + lName);

console.log(fName);
console.log(lName);
console.log(middle);