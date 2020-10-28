var askQuestion = {
    questionText: "PLACEHOLDER",
    answerOne: "PLACEHOLDER",
    answerTwo: "PLACEHOLDER",
    answerThree: "PLACEHOLDER",
}

//when Start Quiz is clicked, display first question and start timer
document.getElementById("startButton").addEventListener("click", function(e){
    console.log(askQuestion.questionText);
    var startTime = setInterval(myTimer, 1000);
    var timerSeconds = 100;
    function myTimer() {
        timerSeconds--;
        document.getElementById("timer").innerHTML = timerSeconds;
    }
    //display the first question and choices
    document.getElementById("questionText").innerHTML = askQuestion.questionText;
    document.getElementById("answerOne").innerHTML = askQuestion.answerOne;
    document.getElementById("answerTwo").innerHTML = askQuestion.answerTwo;
    document.getElementById("answerThree").innerHTML = askQuestion.answerThree;

    if
})











// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


