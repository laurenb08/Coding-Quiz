var questionText = document.getElementById("questionText");
var choiceOne = document.getElementById("answerOne");
var choiceTwo = document.getElementById("answerTwo");
var choiceThree = document.getElementById("answerThree");
var score = documen.getElementById("score");
// var quizTimer = document.getElementById("timer");
var lastQuestion = questions.length - 1;
var questionNumber = 0;
var timeLeft = 100;



// //when Start Quiz is clicked, display first question and start timer
// document.getElementById("startButton").addEventListener("click", function(e) {


var questions = [
    {
        question: "Question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        correct: "answerOne"
    },{
        question: "Question2",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        correct: "answerTwo"
    },{
        question: "Question3",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        correct: "answerThree"
    }
];
document.getElementById("startButton").addEventListener("click", quizTimer);
function quizTimer(setInterval(displayTimer() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
    if (timeLeft <= 0)
        alert("GAME OVER");
        clearInterval(quizTimer);
}, 1000));


function displayQuestion() {
    var qNumber = questions(questionNumber);

    question.innerHTML = "<p>" qNumber.question +"</p>";
    choiceOne.innerHTML = "<p>" qNumber.choiceOne +"</p>";
    choiceTwo.innerHTML = "<p>" qNumber.choiceTwo +"</p>";
    choiceThree.innerHTML = "<p>" qNumber.choiceThree +"</p>";
}








// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


