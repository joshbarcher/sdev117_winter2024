//select the canvas and get a drawing "context"
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const minDegrees = 0;
const maxDegrees = 2 * Math.PI;

//draws the entire scene
drawScene();

function drawScene() {
    drawRandomCircles();
    drawLineOfRects();
}

function randomRadius() {
    return Math.random() * 50;
}

function randomColor() {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;

    return `rgb(${r}, ${g}, ${b})`;
}

function drawRandomCircles() {
    for (let i = 1; i <= 20; i++) {
        //pick a random location - Math.random() returns a number in [0, 1)
        const randomX = Math.random() * 800;
        const randomY = Math.random() * 600;

        drawCircle(randomX, randomY);
    }
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.fillStyle = randomColor();
    const radius = randomRadius();
    ctx.arc(x, y, radius, minDegrees, maxDegrees);
    ctx.fill();
}

function drawLineOfRects() {
    let rectY = 50;
    for (let i = 1; i <= 5; i++) {
        console.log(rectY);
        drawRectangle(500, rectY);
        rectY += 80;
    }
}

function drawRectangle(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.rect(x, y, 50, 50);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
}