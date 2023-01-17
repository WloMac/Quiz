const startBtn = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questionSpot = document.querySelector("#questions")
const title = document.querySelector("#question-title")
const choices = document.querySelector("#choices")
const endScreen = document.querySelector("#end-screen")
const timeCounter = document.querySelector("#time")

// Timer
let timer = 120;
let intervalId;



// variable for starting score
var questions = [
    {
        question: "What color is the sky?",
        choices: ["A. Blue", "B. Green", "C. Yellow", "D. Red"],
        correct: "A. Blue"
    },
    {
        question: "What color is grass?",
        choices: ["A. Blue", "B. Green", "C. Yellow", "D. Red"],
        correct: "B. Green"
    },
    {
        question: "What color is sun?",
        choices: ["A. Blue", "B. Green", "C. Yellow", "D. Red"],
        correct: "C. Yellow"
    },
    {
        question: "What color is poppy?",
        choices: ["A. Blue", "B. Green", "C. Yellow", "D. Red"],
        correct: "D. Red"
    }
]

let index = 0;

console.log(intervalId);



function start(event) {
    event.preventDefault()
    // Timer
    intervalId = setInterval(function() {
        timer--;
        timeCounter.textContent = timer;   
    }, 1000) 

    choices.innerHTML = ""
    startScreen.setAttribute("class", "hide")
    questionSpot.setAttribute("class", "show")
    var userQuestion = questions[index].question
    var userChoices = questions[index].choices
    userChoices.forEach(function (i) {
        let btn = document.createElement("button")
        btn.innerHTML = i
        choices.append(btn)
        btn.addEventListener("click", function (event) {
            let element = event.target
            let choice = element.innerHTML
            if (choice === questions[index].correct) {
                console.log("Correct!")
                index++
                timer = timer + 10;
                if (index == questions.length) {
                    index = 0
                    endQuiz()
                } else {
                    start(event, index)
                }
            } else {
                index++
                if (index == questions.length) {
                    index = 0
                    timer = timer - 15
                    endQuiz()
                } else {
                    start(event, index)
                    console.log("Wrong!")
                }
            }
        })
    })
    title.innerHTML = userQuestion
}

function endQuiz() {
    clearInterval(intervalId);
    startScreen.setAttribute("class", "hide")
    questionSpot.setAttribute("class", "hide")
    endScreen.setAttribute("class", "show")
}


startBtn.addEventListener("click", (start))