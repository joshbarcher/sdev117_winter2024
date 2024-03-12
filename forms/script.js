window.onload = () => {
    const button = document.querySelector("button");
    button.onclick = () => {
        const genresList = document.querySelector("#genres");
        const statesList = document.querySelector("#states");

        const genreSelected = genresList.value;
        const stateSelected = statesList.value;

        console.log(`You selected the ${genreSelected} genre`);
        console.log(`You selected the ${stateSelected} state`);
    }
}