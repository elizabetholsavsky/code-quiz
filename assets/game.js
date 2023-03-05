//questions array
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

// countdown game timer
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

//question
var questionText = document.getElementById("questionText");
var questionsIndex = 0;
currentQuestion = questions[questionsIndex];

//choices
var choiceDiv = document.getElementById("choiceDiv")
var choiceBox = document.getElementsByClassName("choice-box");
var choiceText = document.getElementsByClassName("choice-text");
var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var btnD = document.getElementById("btnD");

//scores
var scoreText = document.getElementById("score");
let answersCorrect = 0;
scoreText.textContent = answersCorrect;


function askQuestion() {
    questionText.textContent = questions[questionsIndex].question;
    btnA.textContent = questions[questionsIndex].choices[0];
    btnB.textContent = questions[questionsIndex].choices[1];
    btnC.textContent = questions[questionsIndex].choices[2];
    btnD.textContent = questions[questionsIndex].choices[3];
}

// event listeners/functions
btnA.addEventListener("click", checkA);
btnB.addEventListener("click", checkB);
btnC.addEventListener("click", checkC);
btnD.addEventListener("click", checkD);

function checkA() {checkAnswer(0);}
function checkB() {checkAnswer(1);}
function checkC() {checkAnswer(2);}
function checkD() {checkAnswer(3);}

function checkAnswer(answer) {
    if (questions[questionsIndex].answer == questions[questionsIndex].choices[answer]) {
        answersCorrect++; 
        console.log(answersCorrect);
    } else {
        secondsLeft = secondsLeft - 10;
    }

    nextQuestion();
}

function nextQuestion() {
    if (questionsIndex < 4) {
    questionsIndex++; 
    askQuestion();
    } else {
    window.location.href = "./end.html";
    }
}

window.onload = function() {
    countdown();
    askQuestion();
    checkAnswer();
}