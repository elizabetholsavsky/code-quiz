var timeText = document.querySelector("#timeLeft");
// timer starts
var secondsLeft = 30;

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

// select points and time remaining in score-display

// create question array with question/choices/answer

//start function to play

//event listener for click

//correct, go to next question, increment score

//wrong, subtract 5 seconds, choice hidden

//Score= points earned * time remaining

//set up new end page for high scores