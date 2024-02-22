console.log(dataArray);

//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown on the web page
let index = 0;

display(); //show the first element

//responds to clicks of the "previous" button
previous.onclick = function(event) {
    index--;

    //make sure that index is never less than zero...

    display();
}

//responds to clicks of the "next" button
next.onclick = function(event) {
    index++;

    //make sure that index is never greater than
    //array.length - 1

    display();
}

//shows the current record in the array of records
//at the position within the dataset variable
function display()
{
    console.log("Next index is " + index);
    console.log(dataArray[index]);

    const record = dataArray[index];
    console.log(record.Category);
    console.log(record.Data.Fat["Monosaturated Fat"]);

    const categorySpan = document.querySelector("#food-category");
    categorySpan.innerHTML = record.Category;

    const fatSpan = document.querySelector("#fat");
    fatSpan.innerHTML = record.Data.Fat["Total Lipid"];
}

