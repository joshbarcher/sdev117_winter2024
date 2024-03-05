window.onload = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
        });
}