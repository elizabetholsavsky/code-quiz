const questions = [
    {
        question: "Which of the following is NOT a primitive data type?",
        choices: ["Number", "Boolean", "Letter", "String"],
        answer: "Letter",
    },
    {
        question: "Which method adds items to an array one at a time?",
        choices: ["add()", "push()", "sort()", "Cannot be done"],
        answer: "push()",
    },
    {
        question: "What kind of loop will repeat a block of code until a condition returns 'false'?",
        choices: ["For Loop", "For In Loop", "Fruit Loop", "While Loop"],
        answer: "While Loop",
    },
    {
        question: "What does the acronym DOM represent?",
        choices: ["Dinner On Me", "Document Object Model", "Document Only Model", "Done On Microsoft"],
        answer: "Document Object Model",
    },
    {
        question: "Which term describes a reusable block of code that performs a certain task?",
        choices: ["Function", "Class", "ID", "Boolean"],
        answer: "Function",
    },
]

// countdown timer, game ends on 0
var secondsLeft = 75 
function countdown() {
    var timeText = document.getElementById("timeLeft");
    var timeLeft = setInterval(function () {
        secondsLeft--;
        timeText.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timeLeft);
            // game over
        }
    }, 1000);
}

// ask question
var questionText = document.getElementById("questionText");
var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var btnD = document.getElementById("btnD");
var choiceText = document.getElementsByClassName("choice-text");
var score = document.getElementById("score");
questionIndex = 0;
score = 0;

function askQuestion() {
    questionText.textContent = questions[questionIndex].question;
    btnA.textContent = questions[questionIndex].choices[0];
    btnB.textContent = questions[questionIndex].choices[1];
    btnC.textContent = questions[questionIndex].choices[2];
    btnD.textContent = questions[questionIndex].choices[3];
}

// check question, points

window.onload = function () {
    countdown();
    askQuestion();
    // check question
    // gameover
}