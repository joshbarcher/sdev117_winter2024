//generate random numbers
let numValidImages = 0;
const imagesArray = [];

while (numValidImages < 5) {
    const ranNum = Math.floor(Math.random() * 10) + 1;

    //add to the array if its not already in the array
    if (!imagesArray.includes(ranNum)) {
        imagesArray.push(ranNum);
        numValidImages++;
    }
}
console.log(imagesArray);

for (let imageNum of imagesArray) {
    loadWaImage(imageNum);
}

function loadWaImage(imageNumber)
{
    const anchor = document.createElement("a");
    const image = document.createElement("img");
    const imageFile = `images/${imageNumber}.png`;

    anchor.href = imageFile;
    image.src = imageFile;
    image.alt = "An interesting place in WA";

    const div = document.querySelector("#locations");

    //put the image in the anchor
    anchor.appendChild(image);

    //put the anchor in the div
    div.appendChild(anchor);
}
