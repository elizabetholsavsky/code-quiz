function playGame() {
    // timer starts
    var timeText = document.querySelector("#timeLeft");

    var secondsLeft = 20;

    function countdown () {
        var timeLeft = setInterval(function() {
        secondsLeft--;
        timeText.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timeLeft);
          }
        }, 1000);
    }
    countdown();

    // select question and choice el from html
    var question = document.querySelector(".question");
    var choices = document.querySelector(".choice-text");
    // select points in score-display
    var correctCount = document.querySelector("#correctCount");

    // create question array with question/choices/answer
    let questions = [
        {
            question:"Which of the following is NOT a primitive data type?",
            choice1:"Number",
            choice2:"Boolean",
            choice3:"Letter",
            choice4:"String",
            answer:"3",
        },
        {
            question:"Which method adds items to an array one at a time?",
            choice1:"add()",
            choice2:"push()",
            choice3:"sort()",
            choice4:"Cannot be done",
            answer:"2",
        },
        {
            question:"What kind of loop will repeat a block of code until a condition returns 'false'?",
            choice1:"For Loop",
            choice2:"For In Loop",
            choice3:"Fruit Loop",
            choice4:"While Loop",
            answer:"4",
        },
        {
            question:"What does the acronym DOM represent?",
            choice1:"Dinner On Me",
            choice2:"Document Object Model",
            choice3:"Document Only Model",
            choice4:"Done On Microsoft",
            answer:"2",
        },
        {
            question:"Which term describes reusable blocks of code that perform a certain task?",
            choice1:"Function",
            choice2:"Class",
            choice3:"ID",
            choice4:"Boolean",
            answer:"1",
        },
    ]
//start function to play

//event listener for click

//correct, go to next question, increment score

//wrong, subtract 5 seconds, choice hidden

//Score= points earned * time remaining

//set up new end page for high scores

}

playGame();


