window.onload = () => {
    const radioButtons = document.querySelectorAll('input[name="gender"]');
    console.log(radioButtons);

    //loop over the array of objects
    for (let element of radioButtons) {
        if (element.checked) {
            console.log(element.value);
        }
    }
}