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
// timer
var secondsLeft = 75 
function countdown() {
    var timeText = document.querySelector("#timeLeft");
    var timeLeft = setInterval(function () {
        secondsLeft--;
        timeText.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timeLeft);
        }
    }, 1000);
}

// ask question
// check question

let questionNumber = 0
let answersCorrect = 0
function askQuestion() {
    var question = document.getElementsByClassName("question");
    var choices = document.getElementsByClassName("choice-text");
    var scoreText = document.querySelector("#score");

    if (questionNumber < 5) {
        scoreText.textContent = answersCorrect
        currentQuestion = questions[questionNumber]
        question[0].innerText = currentQuestion.question
 
        for (i = 0; i < choices.length; i++) {
            choices[i].innerHTML = currentQuestion.choices[i]
            choices[i].addEventListener('click', function (event) {
                event.preventDefault()
                let choiceText = event.target.innerHTML;
                console.log(questionNumber)
                if (choiceText === currentQuestion.answer) {
                    answersCorrect = answersCorrect + 1;
                    questionNumber = questionNumber + 1;
                    askQuestion()
                } else {
                    secondsLeft = secondsLeft - 3;
                    questionNumber = questionNumber + 1;
                    askQuestion()
                }
            })
        }
    } else (console.log("questionsOver"))

}

window.onload = function () {
    countdown();
    askQuestion()
    // check question
    // gameover
}