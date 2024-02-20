//select all list items on the page
const items = document.querySelectorAll("#animals li");
console.log(items);

//change the text on the page
for (const listItem of items) {
    listItem.innerHTML += " (Found!)";
}

const otherItems = document.querySelectorAll("#cars li");

//change the styles on the page
for (let i = 0; i < otherItems.length; i++) {
    const singleItem = otherItems[i];

    //change the font-weight CSS property
    singleItem.style.fontWeight = "bold";
    singleItem.style.backgroundColor = "beige";
}