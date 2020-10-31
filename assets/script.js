var questionText = document.getElementById("questionText");
var choiceOne = document.getElementById("answerOne");
var choiceTwo = document.getElementById("answerTwo");
var choiceThree = document.getElementById("answerThree");
var quizTimer = document.getElementById("timer");
var questionNumber = 0;
// var timeLeft = 100;

//variable array to store questions and answers
var questions = [
    {
        questionText: "Question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        correct: "answerOne"
    },{
        questionText: "Question2",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        correct: "answerTwo"
    },{
        questionText: "Question3",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        correct: "answerThree"
    }
];

//event listener for button click
document.getElementById("startButton").addEventListener("click", startQuiz());

//This function runs when the start button is clicked
function startQuiz() {
    //timer for quiz
    var timerVar = setInterval(quizTimer, 1000) 
        var timeLeft = 100;
        function quizTimer() {
        timeLeft--,
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft = 0){
            alert("GAME OVER");
            clearInterval(timerVar);
            return;
        }
    } 1000;
}



 //function to display questions
 displayQuestion();

 //function to display score
 displayScore();

//This function displays the question
function displayQuestion() {
    var qNumber = questions(questionNumber);

    questionText.innerHTML = "<p>"+ qNumber.questionText +"</p>";
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

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


