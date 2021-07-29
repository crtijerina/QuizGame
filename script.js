// global variables

var buttonAll = document.querySelector("#choices");
var scoreText = document.getElementById("score");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("mainQuestion");
var startBtn = document.getElementById("start");
var optionContainer = document.getElementById("optionsContainer");
var index = 0;
var score = 0;

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

// if (questions[0].a=== click 1){

// }
// console.log(questions[0].a)
// function populateQuestion(){
// for( let i=0; i<questions.length; i++){
//     var questionsDiv = document.createElement("div")
//     questionsDiv.appendChild(mainEl.textContent=questions[i].q)
// }
// }

// Displays the current count on the page
function setCounterText() {
  //countEl.textContent = count;
}

// Increments the count on click and calls setCounterText()
// buttonAll.addEventListener('click', function() {
//   alert("big daddy")
//     score++;
//   setCounterText();
// });

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
  else { mainEl.innerHTML = `Force score is ${score-1}`;
  timerEl.style.display= 'none'  }
}

 

// Timer that counts down from 5

function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    }

    
    else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "May the froce be with you";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
    
    }

  }, 1000);
  questionsList()
  
}
startBtn.onclick = countdown;
// startBtn.onclick = populateQuestion;
score++;


