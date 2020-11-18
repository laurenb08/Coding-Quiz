var questionText = document.getElementById("qText");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var quizTimer = document.getElementById("timer");
var questionNumber = 0;
var timeLeft;

//variable array to store questions and answers
var questions = [
    {
        questionText: "Question1",
        answerOne: "choice1",
        answerTwo: "choice2",
        answerThree: "choice3",
        answerFour: "choice4",
        correct: "answerOne"
    }, {
        questionText: "Question2",
        answerOne: "choice1",
        answerTwo: "choice2",
        answerThree: "choice3",
        answerFour: "choice4",
        correct: "answerTwo"
    }, {
        questionText: "Question3",
        answerOne: "choice1",
        answerTwo: "choice2",
        answerThree: "choice3",
        answerFour: "choice4",
        correct: "answerThree"
    }
];
console.log(questions);

//This function runs when the start button is clicked
function startQuiz() {
    //timer for quiz
    timeLeft = setInterval(function () {
        timeLeft--;
        quizTimer.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            alert("GAME OVER");
        }
    }, 1000)
    displayQuestion();
}

//This function displays the question
function displayQuestion() {
    var qNumber = questions[questionNumber];
    console.log(qNumber);
    console.log(qNumber.answerOne);
    //document.getElementById("question").innerHTML = 
    questionText.innerHTML = "<p>" + qNumber.questionText + "</p>";
    answerOne.innerHTML = qNumber.answerOne;
    answerTwo.innterHTML = "<p>" + qNumber.answerTwo + "</p>";
    answerThree.innterHTML = "<p>" + qNumber.answerThree + "</p>";
}

//This function checks if your answer is correct
function check() {
    if (answer != questions[qNumber].correct);
    timeLeft - 5;
}

//This function displays your score
function displayScore() {
    document.getElementById("finalScore") = timeLeft.value;
}

//this function saves and stores your score
function saveScore() {

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
    // }

    //add event listener for submitScore button click
    document.getElementById("submitScore").addEventListener("click", saveScore);

    // displayScore();
