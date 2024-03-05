//wait for the page to load
window.onload = () => {
    //when the user clicks a button
    const button = document.querySelector("button");
    button.onclick = startCountdown;
}

function startCountdown() {
    let countdownNum = 10;
    const timer = setInterval(() => {
        //update the label on the page
        const para = document.querySelector("#count-down");
        para.innerHTML = countdownNum;

        //lower the countdown
        countdownNum--;

        if (countdownNum === -1) {
            //stop the timer
            clearInterval(timer);
            para.innerHTML = "Blast off!"

            //show the rocket
            const rocket = document.querySelector("img");
            rocket.style.display = "block";

            //set another timer
            setTimeout(() => {
                rocket.src = "images/rocket-ignite.png";
            }, 2000);
        }
    }, 1000);
}