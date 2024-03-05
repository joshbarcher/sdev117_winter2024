window.onload = function() {
    const container = document.querySelector("#container");
    container.onclick = clickedContainer;
    container.onmousemove = movedOverContainer;
};

function movedOverContainer(event) {
    if (event.altKey) {
        moveTarget(event);
    }
}

function clickedContainer(event) {
    moveTarget(event);
}

function moveTarget(event) {
    //location of the mouse relative to the event target
    let x = event.x;
    let y = event.y;

    const console = document.querySelector("#console");
    console.innerHTML += `Clicked on (${x}, ${y})\n`;

    //move the target image to the location you clicked on
    const target = document.querySelector("img");

    if (x > 550) x = 550;
    if (y > 550) y = 550;

    //adjust the location to the center of the image
    x -= 50;
    y -= 50;

    if (x < 0) x = 8;
    if (y < 0) y = 8;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}