window.onload = () => {
    const button = document.querySelector("#load");
    button.onclick = loadImages;
}

async function loadImages() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    const config = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }
    }

    //use the await and async keywords to shorten our asynchronous code
    const response = await fetch(url, config);
    const data = await response.json();

    console.log(data);
    showCats(data);
}

function showCats(data) {
    const catArea = document.querySelector('#cat-area');

    for (let catRecord of data) {
        const image = document.createElement("img");
        image.src = catRecord.url;
        image.alt = "A random cat";

        catArea.appendChild(image);
    }
}