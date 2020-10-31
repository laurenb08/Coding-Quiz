var questionText = document.getElementById("questionText");
var choiceOne = document.getElementById("answerOne");
var choiceTwo = document.getElementById("answerTwo");
var choiceThree = document.getElementById("answerThree");
var quizTimer = document.getElementById("timer");
var questionNumber = 0;
var timeLeft = 100;
var practiceScore = 75;

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
console.log(questions);

//event listener for button click
document.getElementById("startButton").addEventListener("click", startQuiz());

//This function runs when the start button is clicked
function startQuiz() {
    //timer for quiz
    var timerVar = setInterval(quizTimer, 1000);
    function quizTimer() {
        timeLeft--,
        document.getElementById("timer").innerHTML = timeLeft;
        if (timeLeft == 0){
            alert("GAME OVER");
            clearInterval(timerVar);
            return;
        }
    }
}

//This function displays the question
function displayQuestion() {
    var qNumber = questions[questionNumber];
        questionText.innerHTML = "<p>"+ qNumber.questionText +"</p>";
        choiceOne.innerHTML = "<p>"+ qNumber.choiceOne +"</p>";
        choiceTwo.innerHTML = "<p>"+ qNumber.choiceTwo +"</p>";
        choiceThree.innerHTML = "<p>"+ qNumber.choiceThree +"</p>";
}

//This function checks if your answer is correct
function check() {
    if ( answer != questions[qNumber].correct);
    timeLeft-5;
}

//This function displays your score
function displayScore() {
    document.getElementById("finalScore") = timeLeft.value;
}

//this function saves and stores your score
function saveScore(){

    console.log("submitScore");
    var initials = document.getElementById("initials");
    console.log("initials".value);

    var currentScore = {
        playerScore: timeLeft,
        playerInitials: initials.value
    }

    console.log(currentScore);

    var highScores = JSON.parse(window.localStorage.getItem("highScoreList")) || [];

    highScores.push(currentScore);
    localStorage.setItem("highScoreList", JSON.stringify(currentScore));
}

//event listener for startGame button click
document.getElementById("startButton").addEventListener("click", startQuiz());

//add event listener for submitScore button click
document.getElementById("submitScore").addEventListener("click", saveScore);

displayQuestion();
displayScore();

