//wait for page to load
window.onload = pageLoaded;

function pageLoaded() {
    //select all of our input elements
    const inputs = document.querySelectorAll("input");

    for (let singleInput of inputs) {
        singleInput.onfocus = addHighlight;
        singleInput.onblur = removeHighlight;
    }

    const labels = document.querySelectorAll("label");

    for (let label of labels) {
        label.onmouseenter = addHighlight;
        label.onmouseleave = removeHighlight;
    }
}

//how do I figure out in these functions what I'm highlighting?
function addHighlight(event) {
    //this is the element that the event happened upon
    event.target.className = "highlight";
}

function removeHighlight(event) {
    event.target.className = "";
}