//wait for page to load
window.onload = pageLoaded;

function pageLoaded() {
    //select all of our input elements
    const inputs = document.querySelectorAll("input");

    for (let singleInput of inputs) {
        singleInput.onfocus = () => singleInput.className = "highlight";
        singleInput.onblur = () => singleInput.className = "";
    }
}