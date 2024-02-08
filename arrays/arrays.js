//favorite songs
const songs = ["The Gambler", "Melt With You", "Smells Like Teen Spirit",
               "Smooth Sailing", "Smooth Smoothie", "The Red", "The Blonde",
               "Tom's Diner", "Fortunate Son", "Fire on Fire", "Disco Cone",
               "Smooth Operator", "Smooth Criminal", "The Nights"];

//loop over the group and interact with each element
for (let i = 0; i <= songs.length - 1; i++) {
    let song = songs[i];
    song = song.toUpperCase();
    console.log(`A good song is ${song}`);
}
console.log(); //empty space

//loop over our elements again
for (const singleSong of songs) {
    //which songs begin with the word "Smooth"
    if (singleSong.startsWith("Smooth")) {
        console.log(singleSong);
    }
}
console.log(); //empty space

//use a higher-order function
songs.forEach(song => {
    if (song.startsWith("The")) {
        console.log(song);
    }
});