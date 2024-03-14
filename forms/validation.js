window.onload = () => {
    const button = document.querySelector("button");
    button.onclick = validate;
}

function validate(event) {
    //stop form submission
    event.preventDefault();

    let allValidFields = true;

    //validate each part of our form
    const name = document.querySelector("#name").value;
    if (name.length < 2 || name.length > 20) { //bad name!
        document.querySelector("#name-error").style.display = "inline";
        allValidFields = false;
    } else { //good name!
        document.querySelector("#name-error").style.display = "none";
    }

    const age = parseInt(document.querySelector("#age").value);
    console.log(typeof age);
    console.log(age);
    if (Number.isNaN(age) || age < 1 || age > 100) { //bad age!
        document.querySelector("#age-error").style.display = "inline";
        allValidFields = false;
    } else { //good age!
        document.querySelector("#age-error").style.display = "none";
    }

    //validate other fields...

    validateRadioButtons();
    validateCheckboxes();

    //what if things look all right?
    if (allValidFields) {
        document.forms["questions"].submit();
    }
}

function validateCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let element of checkboxes) {
        if (element.checked) {
            console.log(element.value);
        }
    }
}

function validateRadioButtons() {
    const radioButtons = document.querySelectorAll('input[name="funny"]');
    console.log(radioButtons);

    //loop over the array of objects
    for (let element of radioButtons) {
        if (element.checked) {
            console.log(element.value);
        }
    }
}
