//event handling - write a function to respond to an event
const myButton = document.querySelector("#calc-button");

myButton.onclick = function() {
    //select the textarea element on the page
    const myOutput = document.querySelector("#output");
    const num1Textbox = document.querySelector("#num1");
    const num2Textbox = document.querySelector("#num2");

    //read in the numbers from the textboxes
    let num1 = num1Textbox.value;
    let num2 = num2Textbox.value;

    //convert our string inputs to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let add = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    let mod = num1 % num2; //remainder
    let exp = num1 ** num2; //exponent

    add = add.toFixed(2);
    sub = sub.toFixed(2);
    mult = mult.toFixed(2);
    div = div.toFixed(2);
    mod = mod.toFixed(2);
    exp = exp.toFixed(2);

    //print out the results (using string-template literals)
    const addResult = `The result of ${num1} + ${num2} = ${add}`;
    const subResult = `The result of ${num1} - ${num2} = ${sub}`;
    const multResult = `The result of ${num1} * ${num2} = ${mult}`;
    const divResult = `The result of ${num1} / ${num2} = ${div}`;
    const modResult = `The result of ${num1} % ${num2} = ${mod}`;
    const expResult = `The result of ${num1} ** ${num2} = ${exp}`;

    //add a random number to the textarea
    myOutput.innerHTML = ""; //clear the textbox!
    myOutput.innerHTML += addResult + "\n";
    myOutput.innerHTML += subResult + "\n";
    myOutput.innerHTML += multResult + "\n";
    myOutput.innerHTML += divResult + "\n";
    myOutput.innerHTML += modResult + "\n";
    myOutput.innerHTML += expResult + "\n";
}
