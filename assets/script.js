//add timer to top right to show time left in the quiz
//timer will start when you press Start Quiz button

var startTime = setInterval(myTimer, 1000);
var timerSeconds = 100;
function myTimer() {
    timerSeconds--;
    document.getElementById("timer").innerHTML = timerSeconds;
}

var askQuestion = {
    question: "PLACEHOLDER",
    answerOne: "PLACEHOLDER",
    answerTwo: "PLACEHOLDER",
    answerThree: "PLACEHOLDER",
}

//when Start Quiz is clicked, display first question
document.getElementById("startButton").addEventListener("click", function(e){
    console.log(askQuestion.question);
    //display the first question and choices
    document.getElementById()
})










// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


