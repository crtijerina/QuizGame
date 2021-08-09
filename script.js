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
var timeLeft = 60;
var nameInput = document.getElementById("name_input");
var scoreInput = document.getElementById("score_input");
var scores = [];
var scoreList = document.getElementById("scoreList");
var jediForm = document.getElementById("jediForm");

init();

//score
function renderScores() {
  // Clear scoreList element and update scoreInput
  scoreList.innerHTML = "";
  // scoreInput.textContent = scores.length;

  // Render a new li for each score
  for (var i = 0; i < scores.length; i++) {
    var scoreLi = scores[i];

    var tr = document.createElement("tr");
    var td_forceScore = document.createElement("td") 
    var td_jediTitle = document.createElement("td") 
    //tr.setAttribute("data-index", i);
    scoreList.appendChild(tr)
    tr.appendChild(td_jediTitle) 
    tr.appendChild(td_forceScore)
    td_jediTitle.textContent=scoreLi.jediName 
    td_forceScore.textContent= scoreLi.scoreNumber
  
  }
  
}
//toggle funtion
function toggle() {
  var leaderBoard = document.getElementById("leaderBoard");
  if (leaderBoard.style.display === "none") {
    leaderBoard.style.display = "table";
  } else {
    leaderBoard.style.display = "none";
  }
}
function storedScores() {
  // Stringify and sdet "Scores" key in localStorage to Scores array
  localStorage.setItem("scores", JSON.stringify(scores));
}

function init() {
  // Get stored scores from localStorage
  // Parsing the JSON string to an object
  var storedScores = JSON.parse(localStorage.getItem("scores"));

  // If scores were retrieved from localStorage, update the scores array to it
  if (storedScores !== null) {
    scores = storedScores;
  }

  // Render scores to the DOM
  renderScores();
}
// When form is submitted...
jediForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var jediText = nameInput.value.trim();

  // Return from function early if submitted jediText is blank
  if (jediText === "") {
    alert("Jedi name enter you must");
    return;
  }

  localStorage.setItem("jediName", nameInput.value);
  localStorage.setItem("score", score);
  console.log(score);
  let forceScore = {
    jediName: jediText,
    scoreNumber: score,
  };

  // Add new jediText to todos array, clear the input
  scores.push(forceScore);
  nameInput.value = "";

  // // Store updated todos in localStorage, re-render the list
  storedScores();
  renderScores();
});

//dark mode function
function darkMode() {
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

//question oppions
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
  } else {
    mainEl.innerHTML = ` Force score is ${score}`;
    isPaused = true;
    scoreText.style.display = "none";
  }
}

// Timer that counts down from 5

function countdown() {
  darkMode();
  var timeInterval = window.setInterval(function () {
    if (!isPaused) {
      timeLeft--;
      timerEl.textContent = "Seconds: " + timeLeft;
    } else if (timeLeft === 0) {
      isPaused = true;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = `Finished with ${timeLeft} seconds left. May the force be with you.`;
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
    }
  }, 1000);

  questionsList();
}
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  countdown();
});
