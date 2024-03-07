window.onload = () => {
    let button = document.querySelector("#load");
    button.onclick = fetchData;

    button = document.querySelector("#loop");
    button.onclick = () => {
        setInterval(() => {
            fetchData();
        }, 2000);
    }
}

function fetchData() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            console.log(response);
            return response.json(); //convert JSON to JS objects
        })
        .then(data => {
            console.log(data);
            showCat(data);
        });
}

function showCat(data) {
    //url is a web address
    const imagePath = data[0].url;
    console.log(imagePath);
    const image = document.querySelector("img");
    image.src = imagePath;
}