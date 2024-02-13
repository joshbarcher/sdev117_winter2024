const superbowl = { 
    number: 58, 
    teamOne: {
        name: "Kansas City Chiefs",
        jerseyColor: "Red",
        score: 25
    },  
    teamTwo: {
        name: "San Francisco 49ers",
        jerseyColor: "White",
        score: 23
    },
    location: "Las Vegas",
    featuresTaylorSwift: true,
    sponsors: ['Door Dash', 'Deadpool #3', 'Verizon', 'Budweiser?', 'Popeyes'],
    announce: () => {
        console.log(`Announcing the ${number} Superbowl!`)
    }
}

console.log(`Did you watch Superbowl #${superbowl.number}`);

if (superbowl.featuresTaylorSwift === true) {
    console.log('How did she do?');
} else {
   console.log('Who starred during the half-time show?');
}

//loop over a nested array
for (const sponsor of superbowl.sponsors) {
    console.log(`${sponsor} was a sponsor of the Superbowl!`);
}
console.log();

//loop over the sponsors again (using the for-i)
for(let i = 0; i <= superbowl.sponsors.length - 1; i++) {
    let sponsor = superbowl.sponsors[i];
    console.log(`${sponsor} was a sponsor of the superbowl!`)
}

//print out the final score
const score1 = superbowl.teamOne.score;
const score2 = superbowl.teamTwo.score;

console.log(`The final score was ${score1} - ${score2}`);