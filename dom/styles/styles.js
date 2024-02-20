//style the header
const header = document.querySelector("h1");

header.style.color = "darkred";
header.style.fontSize = "2em";
header.style.fontWeight = "bold";
header.style.textDecoration = "underline";

//header.className = "header-bold";

const paragraphs = document.querySelectorAll("p");

for (const para of paragraphs) {
    para.style.backgroundColor = "beige";
    para.style.padding = "8px";
    para.style.margin = "8px";
    para.style.border = "1px solid black";
    para.style.width = "400px";
}

const spans = document.querySelectorAll("span");
for (const singleSpan of spans) {
    singleSpan.style.display = "block";
}

const questions = document.querySelectorAll(".question");
for (const question of questions) {
    question.style.color = "darkblue";
}

const answers = document.querySelectorAll(".answer");
for (const answer of answers) {
    answer.style.color = "green";
}