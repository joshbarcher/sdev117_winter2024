const button = document.querySelector("button");
const linkBox = document.querySelector("#bookmark");
const textBox = document.querySelector("#bookmark-text");

button.onclick = function() {
    const link = linkBox.value;
    const text = textBox.value;

    //add a new list item to the list
    const list = document.querySelector("#links");
    list.innerHTML += `<li>
        <a href="${link}">${text}</a>
        <button>x</button>
    </li>`;
}