window.onload = () => {
    const button = document.querySelector("button");
    button.onclick = validate;
}

function validate(event) {
    //stop form submission
    event.preventDefault();

    //validate each part of our form
    const name = document.querySelector("#name").value;
    if (name.length < 2 || name.length > 20) { //bad name!
        document.querySelector("#name-error").style.display = "inline";
    } else { //good name!
        document.querySelector("#name-error").style.display = "none";
    }

    const age = parseInt(document.querySelector("#age").value);
    console.log(typeof age);
    if (age < 1 || age > 100) { //bad age!
        document.querySelector("#age-error").style.display = "inline";
    } else { //good age!
        document.querySelector("#age-error").style.display = "none";
    }

    validateRadioButtons();
    validateCheckboxes();
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
