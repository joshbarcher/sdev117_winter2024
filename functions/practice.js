
console.log(typeOfNum(10));
console.log(typeOfNum(33));
console.log(typeOfNum(-2));
console.log(typeOfNum(0));

function typeOfNum(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}