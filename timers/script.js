window.onload = () => {
    setRandomTimer();
}

function setRandomTimer() {
    const randomSeconds = Math.random() * 5000;  
    const para = document.querySelector("#content");

    let seconds = randomSeconds / 1000;
    seconds = seconds.toFixed(2);
    para.innerHTML += `Starting a timer for ${seconds} seconds<br>`;

    window.setTimeout(() => {
        para.innerHTML += "Timer all done!<br>";

        //start a new random timer
        setRandomTimer();
    }, randomSeconds);
}

function practice() {
    //start an interval timer to run 10 times
    let count = 0;
    const timer = window.setInterval(() => {
        count++;

        const para = document.querySelector("#content");
        para.innerHTML += `#${count} - Hello SDEV 117!<br>`;

        if (count === 10) {
            //stop the timer
            clearInterval(timer);
        }
    }, 1000);
}