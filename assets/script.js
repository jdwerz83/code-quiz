var questions = [{
    title: "JavaScript strings are for storing and manipulating what?",
    choices: ["codes", "text", "booleans", "percentages"],
    answer: "text"
},
{
    title: "Array indexes start with what?",
    choices: ["0", "1", "A", "first"],
    answer: "0"
},
{
    title: "What is the JavaScript keyword that refers to the object it belongs to?",
    choices: ["Let", "Const", "This", "Var"],
    answer: "This"
},
{
    title: "This JavaScript data type represents one of two values: true or false.",
    choice: ["For", "Var", "div", "Boolean"],
    answer: "Boolean"
},
{
    title: "Objects are wrapped in what?",
    choice: ["()", "[]", "{}", "||"],
    answer: "{}"
}
]
var secondsLeft = 0;
var timer;
var score = 0;
var nextQ = -1;

function launch() {
    secondsLeft = 60;
    document.getElementById("secondsLeft").innerHTML = secondsLeft;
    
    timer = setInterval(function() {
        secondsLeft--;
        document.getElementById("secondsLeft").innerHTML = secondsLeft;
        if(secondsLeft <= 0) {
            clearInterval(timer);
            terminate();
        }
    }, 1000);
    nextStep();
}

function terminate() {
    clearInterval(timer);
    var theQuiz = `
    <h2>Final Score is ` + score + `.</h2>
    <input type="text" id="initials" placeholder="Initials">
    <button onclick="highScore()">Your score</button>
    `;
    document.getElementById("mainBody").innerHTML = theQuiz;
}

function highScore() {
    localStorage.setItem("highScore", score);
    localStorage.setItem("highScoreInitials", document.getElementById('initials').value);
    scoreBoard();
}

function scoreBoard() {
    var theQuiz = `
    <h2>` + localStorage.getItem("highScoreInitials") + ` has a highscore of:</h2>
    <h1>` + localStorage.getItem("highScore") + `</h1><br>
    <button onclick="clearScores()">Clear Score</button><button onclick="reset()">Try Again</button>
    `;
    document.getElementById("mainBody").innerHTML = theQuiz;
}

function clearScores() {
    localStorage.setItem("highScore", "");
    localStorage.setItem("highScoreInitials", "");
    reset();
}

function reset() {
    clearInterval(timer);
    score = 0;
    nextQ = -1;
    secondsLeft = 0;
    timer = null;

    document.getElementById("secondsLeft").innerHTML = secondsLeft;

    var theQuiz = `
    <h1>Web APIs Challenge: Code Quiz</h1>
    <h3>Click to Launch</h3>
    <button onclick="launch()">Launch</button>
    `;

    document.getElementById("mainBody").innerHTML = theQuiz;
}

function right() {
    score += 10;
    nextStep();
}

function wrong() {
    secondsLeft -= 10;
    nextStep();
}

function nextStep() {
    nextQ++;

    if (nextQ > questions.length - 1) {
        terminate();
        return;
    }

    var theQuiz = "<h2>" + questions[nextQ].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[nextQ].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[nextQ].choices[buttonLoop]);
        if (questions[nextQ].choices[buttonLoop] == questions[nextQ].answer) {
            buttonCode = buttonCode.replace("[ANS]", "right()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "wrong()");
        }
        theQuiz += buttonCode
    }


    document.getElementById("mainBody").innerHTML = theQuiz;
}