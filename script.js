// global variables

var buttonAll = document.querySelector("#choices");
var scoreText = document.getElementById("score");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("mainQuestion");
var startBtn = document.getElementById("start");
var optionContainer = document.getElementById("optionsContainer");
var index = 0;
var score = 0;
var isPaused = false; 
var timeL
var nameInput = document.getElementById("name_input")
var scoreInput = document.getElementById("score_input")

function renderScore() {
  var finalScore = localStorage.getItem('final_score')
var Jedi = localStorage.getItem('Jedi_name')  
if (finalScore === null || Jedi === null){
  return 
}  
  
nameInput.textContent = Jedi
scoreInput.textContent = finalScore



}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var questions = [
  {
    q: "In Star Wars, what do they call the invisible power that binds the galaxy together? ",
    a: "The Force",
    c: ["The Force", "circle theory", "The speed of love", "dark power"],
  },
  {
    q: "C-3P0 is fluent in how many languages?",
    a: "Over 60 million languages",
    c: [
      "Over 1 million languages",
      "Over 4 million languages",
      "Over 60 million languages",
      "Over 100 million languages",
    ],
  },
  {
    q: "Who killed the four Jedi Masters: Saesee Tinn, Mace Windu, Kit Fisto, and Agen Kolar?",
    a: "Darth Sidious",
    c: ["Darth ", "Sidious", "Sidious Darth", "Darth Sidious"],
  },
  {
    q: "What is the name of Yoda’s home?",
    a: "Dagobah",
    c: ["Skywalker", "Bothans", "Kashyyyk", "Dagobah"],
  },
  {
    q: "What is the name of General Grievous’ Flagship, which was not mentioned in the movie?",
    a: "The Invisible Hand",
    c: ["Madclaw", "The Invisible Hand", "The Hand", "The Han"],
  },
  {
    q: "What is the Toydarian’s name who owned Anakin Skywalker?",
    a: "Watto",
    c: ["Watto", "Madclaw", "Grand Moff Tarkin", "Skywalker"],
  },
];

function optionsList() {
  var options = questions[index].c;
  var answer = questions[index].a;
  for (let i = 0; i < options.length; i++) {
    var optionButton = document.createElement("button");
    optionContainer.append(optionButton);
    optionButton.innerHTML = options[i];
    optionButton.addEventListener("click", function (event) {
      if (event.target.innerHTML === answer) {
        alert("Correct");
        scoreText.innerHTML = `Score ${score++}`;
        index++;
questionsList();
        while (optionContainer.hasChildNodes()) {
          optionContainer.removeChild(optionContainer.firstChild);
        }

        optionsList();
      } else alert("The Force was not with you");
    });
  }
}

function questionsList() {
  var questionList = questions.length - 1;
  if (index <= questionList) {
    mainEl.innerHTML = questions[index].q;
    optionsList();
  }
  else { mainEl.innerHTML = ` Force score is ${score-1}`;
    isPaused= true 
  scoreText.style.display = "none"
}

}

 

// Timer that counts down from 5

function countdown() {
  myFunction()
  var timeInterval = window.setInterval(function() {
    if(!isPaused) {
        timeLeft--;
      timerEl.textContent="Seconds: " + timeLeft;
    }else if (timeLeft === 0){
        isPaused= true; 
      }
    else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = `Finished with ${timeLeft} seconds left. May the force be with you.` 
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
      
      }
  }, 1000);
    
    
  questionsList()
  
}
startBtn.onclick = countdown;


score++;


