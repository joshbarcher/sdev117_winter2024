//wait for the page loaded event to "fire"
window.onload = () => {
    console.log("Page loaded");
    console.log(document.body.children);

    //select our button and add an event handler
    const button = document.querySelector("button");
    button.onclick = () => {
        const playArea = document.querySelector("#play-area");
        const image = document.createElement("img");

        image.src = getRandomDiceSide();
        animateDice(image);
        image.alt = `A random dice`;
        image.className = "dice";

        image.ondblclick = () => animateDice(image);

        playArea.appendChild(image);
    }
}

function animateDice(img) {
    //switch the dice image 10 times
    let times = 0;
    const timer = window.setInterval(() => {
        //change the side of the dice
        img.src = getRandomDiceSide();

        //check if we should stop
        times++;
        if (times === 10) {
            clearInterval(timer);
        }
    }, 200);
}

function getRandomDiceSide() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return `images/${randomNum}.png`;
}