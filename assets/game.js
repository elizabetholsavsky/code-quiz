//questions array, correct when choices index = answer
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
            gameOver();
        }
    }, 1000);
}

//question variables
var questionText = document.getElementById("questionText");
var questionsIndex = 0;

//choice variables
var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var btnD = document.getElementById("btnD");

// score variables
var scoreText = document.getElementById("score");
var correctAnswers = 1;

//page container/game over variables
var scoreDisplay = document.getElementById("score-display");
var choiceContainer = document.getElementById("choice-container");

function askQuestion() {
    questionText.textContent = questions[questionsIndex].question;
    btnA.textContent = questions[questionsIndex].choices[0];
    btnB.textContent = questions[questionsIndex].choices[1];
    btnC.textContent = questions[questionsIndex].choices[2];
    btnD.textContent = questions[questionsIndex].choices[3];
}

// event listeners/functions for user choices
btnA.addEventListener("click", checkA);
btnB.addEventListener("click", checkB);
btnC.addEventListener("click", checkC);
btnD.addEventListener("click", checkD);

function checkA() {checkAnswer(0);}
function checkB() {checkAnswer(1);}
function checkC() {checkAnswer(2);}
function checkD() {checkAnswer(3);}

function checkAnswer(answer) {
    if (questions[questionsIndex].answer === questions[questionsIndex].choices[answer]) {
        scoreText.textContent = correctAnswers;
        correctAnswers++; 
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
    gameOver();
    }
}

var gameOverDisplay = document.getElementById("game-over")
var userScoreContainer = document.getElementById("user-score-container");
var highScoreInput = document.getElementById("high-score-input");
var highScoreList = document.getElementById("high-score-list");

function gameOver() {
   gameOverDisplay.style.display = "block"
   scoreDisplay.style.display = "none";
   questionText.style.display = "none";
   choiceContainer.style.display = "none";
}

var highScores = document.getElementById("high-scores")

window.onload = function() {
    gameOverDisplay.style.display = "none"
    highScores.style.display = "none"
    countdown();
    askQuestion();
}