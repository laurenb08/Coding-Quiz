var questionText = document.getElementById("questionText");
var choiceOne = document.getElementById("answerOne");
var choiceTwo = document.getElementById("answerTwo");
var choiceThree = document.getElementById("answerThree");
var score = documen.getElementById("score");
// var quizTimer = document.getElementById("timer");
var lastQuestion = questions.length - 1;
var questionNumber = 0;
var timeLeft = 100;

//variable array to store questions and answers
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

document.getElementById("startButton").addEventListener("click", startQuiz);

//Timer for quiz that counts down from 100
var quizTimer setInterval(displayTimer) {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0)
        alert("GAME OVER");
        clearInterval(quizTimer);
}, 1000;

//This function displays the question
function displayQuestion() {
    var qNumber = questions(questionNumber);

    question.innerHTML = "<p>"+ qNumber.question +"</p>";
    choiceOne.innerHTML = "<p>"+ qNumber.choiceOne +"</p>";
    choiceTwo.innerHTML = "<p>"+ qNumber.choiceTwo +"</p>";
    choiceThree.innerHTML = "<p>"+ qNumber.choiceThree +"</p>";
}

//This function checks if your answer is correct
function check() {
    if ( answer /= questions[qNumber].correct);
    timeLeft-5;
}

//This function displays your score
function displayScore() {
    document.getElementById("finalScore") = timeLeft;
}

//This function runs when the start button is clicked
function startQuiz() {
    displayQuestion();
    displayScore();
}







// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


