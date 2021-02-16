var questionText = document.getElementById("qText");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var quizTimer = document.getElementById("timer");
var finalScore = document.getElementById("finalScore");
var highScoreList = document.getElementById("highScoreList");
var questionNumber = 0;
var intervalID;
var questionIndex = 0;
var score;
var finishers = [];

var questions = [
    {
        title: "What does this equation mean ? a != t",
        choices: ["A is equal to T", "A is more important than T", "A is not equal to T", "T is added to A"],
        answer: "A is not equal to T"
    },
    {
        title: "What tag is used to place a button inside an HTML document?",
        choices: ["<link>", "<div>", "<main>", "<button>"],
        answer: "<button>"
    },
    {
        title: "In JavaScript, what is a block of code called that performs a specific task?",
        choices: ["Variable", "Function", "String", "Array"],
        answer: "Function"
    },
    {
        title: "CSS improves the _____ of an HTML document.",
        choices: ["Function", "Appearance", "Layout", "Colors"],
        answer: "Appearance"
    },
    {
        title: "What CSS property shows you extra information about something when you hover over an element?",
        choices: ["Hint", "Info Block", "Tutorial", "Tooltip"],
        answer: "Tooltip"
    }];

document.getElementById("storeScore").style.display = "none";

//This function runs when the start button is clicked
function startQuiz() {
    //timer for quiz
    intervalID = setInterval(timer, 1000);
    document.getElementById("instructionPage").style.display = "none";
    // document.getElementById("storeScore").style.display = "none";
    displayQuestion();
}

var timeLeft = questions.length * 15;

function timer() {
    timeLeft--;
    quizTimer.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        // alert("GAME OVER");
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
        score = timeLeft;
        finalScore.textContent = score;
        console.log(score);
        clearInterval(intervalID);
        document.getElementById("questionArea").style.display = "none";
        quizTimer.style.display = "none";
        document.getElementById("storeScore").style.display = "block";
        document.getElementById("submitScore").addEventListener("click", saveScore);
        // saveScore();
    }

};

function saveScore() {
    // e.preventDefault();
    console.log("submitScore");
    var initials = document.getElementById("initials");
    console.log(initials);
    var currentScore

    if (initials.value === "") {
        alert("Please submit initials.");
    }

    if (initials.value !== "") {
        var playerInitials = initials.value;
        currentScore = "Score: " + timeLeft + " Player Initials: " + playerInitials
        console.log(currentScore);

    }
    finishers.push(currentScore);
    localStorage.setItem("highScoreList", JSON.stringify(finishers));



    // document.getElementById("submitScore").innerHTML = currentScore;
    console.log(currentScore);


    // var highScores = JSON.parse(window.localStorage.getItem("highScoreList")) || [];

    // highScores.push(currentScore);
    // window.localStorage.setItem("highScoreList", JSON.stringify(currentScore));
    // }

    //add event listener for submitScore button click
    // document.getElementById("submitScore").addEventListener("click", saveScore);

}

document.getElementById("startButton").addEventListener("click", function () {
    startQuiz();
});