//load three images!
for (let i = 1; i <= 5; i++) {
    loadWaImage();
}

function loadWaImage()
{
    const ranNum = Math.floor(Math.random() * 10) + 1;
    const image = document.createElement("img");

    image.src = `images/${ranNum}.png`;
    image.alt = "An interesting place in WA";

    const div = document.querySelector("#locations");
    div.appendChild(image);
}
