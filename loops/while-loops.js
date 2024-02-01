const correctPass = 'password123!';
let guess = '';

while (guess !== correctPass) {
    guess = prompt("Guess the password:");

    if (guess === correctPass) {
        console.log("You guessed correctly!")
    } else {
        console.log("Guess again");
    }
}
console.log("All done!");