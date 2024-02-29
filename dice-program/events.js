//wait for the page loaded event to "fire"
window.onload = () => {
    console.log("Page loaded");
    console.log(document.body.children);

    //select our button and add an event handler
    const button = document.querySelector("button");
    button.onclick = () => {
        let randomNum = Math.floor(Math.random() * 6) + 1;

        const playArea = document.querySelector("#play-area");
        const image = document.createElement("img");

        image.src = `images/${randomNum}.png`;
        image.alt = `A ${randomNum} sided dice`;
        image.className = "dice";

        image.onclick = () => {
            //change the side of the dice to a different image
            randomNum = Math.floor(Math.random() * 6) + 1
            image.src = `images/${randomNum}.png`;
        }

        playArea.appendChild(image);
    }
}
