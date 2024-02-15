// const author = {
//     first: "James",
//     last: "Islington",
//     booksWritten: 4
// }

const favBook = {
    title: "The Will of the Many",
    author: {
        first: "James",
        middle: "R.",
        last: "Islington",
        booksWritten: 4
    },
    pages: 639,
    genres: [{
            name: "fantasy",
            ageGroup: "10+",
            description: "Elves, dwarves, and magic..."
        }, {
            name: "military",
            ageGroup: "17+",
            description: "Wars and soldiers..."
        }, {
            name: "action",
            ageGroup: "15+",
            description: "Violence..."
        }
    ],
    synopsis: "A young fugitive uncovers layered mysteries and world-changing secrets",
    format: "Hardcover",
    printAppropriateAgeGroups: function() {
        //print all the age groups for the genres of this book
        for (const genre of this.genres) {
            console.log(genre.ageGroup);
        }

        for (let i = 0; i <= this.genres.length - 1; i++) {
            const genre = this.genres[i];
            console.log(genre.ageGroup);
        }
    },
    getAuthorName: function() {
        return this.author.first + " " + this.author.middle + " " + this.author.last;
    },
    printGenres: function() {
        for (const genre of this.genres) {
            console.log(`Genre: ${genre.name}`);
        }
    },
    printCatalogCard: function() {
        //print out the book
        console.log(this.title + " by " + this.getAuthorName());
        console.log("*************************************");
        console.log("Pages: " + this.pages);
        console.log("Format: " + this.format);
        console.log("Genres: " + this.genres.length);
        console.log("Synopsis: " + this.synopsis);
        console.log("*************************************");
    }
}

favBook.printCatalogCard();
console.log(); //new line
favBook.printGenres();
console.log(); //new line
favBook.printAppropriateAgeGroups();

