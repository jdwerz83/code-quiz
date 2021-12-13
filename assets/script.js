var secondsLeft = 0;
var timer;
var score = 0;
var nextQ = -1;

var question = [{
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
    choices: ["Let", "Const", "this", "Var"],
    answer: "this"
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

function launch() {
    secondsLeft = 60;
    document.getElementById(secondsLeft).innerHTML = secondsLeft;

    timer = setInterval(function() {
        secondsLeft--;
        document.getElementById("secondsLeft").innerHTML = secondsLeft;
        if(secondsLeft <= 0) {
            clearInterval(timer);
            terminate();
        }
    }, 1000);
}