var questionText = document.getElementById("qText");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var quizTimer = document.getElementById("timer");
var questionNumber = 0;
var intervalID;
var questionIndex = 0;
var score;

//variable array to store questions and answers
// var questions = [
//     {
//         questionText: "Question1",
//         answerOne: "choice1",
//         answerTwo: "choice2",
//         answerThree: "choice3",
//         answerFour: "choice4",
//         correct: "answerOne"
//     }, {
//         questionText: "Question2",
//         answerOne: "choice1",
//         answerTwo: "choice2",
//         answerThree: "choice3",
//         answerFour: "choice4",
//         correct: "answerTwo"
//     }, {
//         questionText: "Question3",
//         answerOne: "choice1",
//         answerTwo: "choice2",
//         answerThree: "choice3",
//         answerFour: "choice4",
//         correct: "answerThree"
//     }
// ];
// console.log(questions);

var questions = [
    {
        title: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
        answer: "<script>"
    },
    {
        title: "What is the correct syntax for referring to an external script called 'script.js'?",
        choices: ['<script src=”script.js”>', '<script href=”script.js”>', '<script ref=”script.js”>', '<script name=”script.js”>'],
        answer: '<script src=”script.js”>'
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function:myFunction", "function myFunction()", "Int Main(args)"],
        answer: "function myFunction()"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: ["if (i==5)", "if i=5 then", "if i = 5", "if i == 5 then"],
        answer: "if (i==5)"
    },
    {
        title: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction()", "call function myFunction()", "myFunction()", "void 'myFunction()' "],
        answer: "myFunction()"
    }];

document.getElementById("storeScore").style.display = "none";

//This function runs when the start button is clicked
function startQuiz() {
    //timer for quiz
    intervalID = setInterval(timer, 1000);
    document.getElementById("instructionPage").style.display = "none";
    document.getElementById("storeScore").style.display = "none";
    displayQuestion();
}

var timeLeft = questions.length * 15;

function timer() {
    timeLeft--;
    quizTimer.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        alert("GAME OVER");
        clearInterval(intervalID);
    }
};

function displayQuestion() {
    if (questionIndex < questions.length) {
        var questionTitleEl = document.createElement("h1");
        questionTitleEl.textContent = questions[questionIndex].title;
        document.getElementById("questionArea").append(questionTitleEl);
        for (var i = 0; i < questions[questionIndex].choices.length; i++) {
            var button = document.createElement("button");
            button.textContent = questions[questionIndex].choices[i];
            document.getElementById("questionArea").append(button);
            button.addEventListener("click", function (e) {
                console.log(e.target.textContent);
                if (e.target.textContent === questions[questionIndex].answer) {
                    console.log("correct");

                } else {
                    timeLeft -= 15;
                }
                questionIndex++;
                document.getElementById("questionArea").innerHTML = "";
                displayQuestion();
            })
        }
    } else {
        console.log("game over");
        clearInterval(quizTimer);
        score = timeLeft;
        console.log(score);
    }
    saveScore();
};

//This function displays the question
// function displayQuestion() {
//     var qNumber = questions[questionNumber];
//     console.log(qNumber);
//     console.log(qNumber.answerOne);
//document.getElementById("question").innerHTML = 
// questionText.innerHTML = "<p>" + qNumber.questionText + "</p>";
// answerOne.innerHTML = qNumber.answerOne;
// answerTwo.innterHTML = "<p>" + qNumber.answerTwo + "</p>";
// answerThree.innterHTML = "<p>" + qNumber.answerThree + "</p>";
// }

//This function checks if your answer is correct
// function check() {
//     if (answer != questions[qNumber].correct);
//     timeLeft - 5;
// }

//This function displays your score
// function displayScore() {
//     document.getElementById("finalScore") = timeLeft.value;
// }

//this function saves and stores your score
function saveScore(e) {
    e.preventDefault();
    document.getElementById("questionArea").style.display = "none";
    document.getElementById("storeScore").removeAttribute(".hide");
    console.log("submitScore");
    var initials = document.getElementById("initials");
    console.log("initials".value);

    if (initials.value === "") {
        alert("Please submit initials.");
    }

    if (initials.value !== "") {
        var currentScore = {
            score: timeLeft,
            playerInitials: initials.value
        }
    }


    console.log(currentScore);

    var highScores = JSON.parse(window.localStorage.getItem("highScoreList")) || [];

    highScores.push(currentScore);
    window.localStorage.setItem("highScoreList", JSON.stringify(currentScore));
    // }

    //add event listener for submitScore button click
    document.getElementById("submitScore").addEventListener("click", saveScore);

}


document.getElementById("startButton").addEventListener("click", function () {
    startQuiz();
});