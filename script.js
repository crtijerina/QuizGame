

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('mainQuestion');
var startBtn = document.getElementById('start');

var questions=[
    {q:"Is In Star Wars, what do they call the invisible power that binds the galaxy together? ", a:"The Force", c:[{choice1:"The Force"},{choice2:"circle theory"},{choice3:"The speed of love"},{choice4:"dark power"} ]},
    {q:"C-3P0 is fluent in how many languages?", a:"Over 60 million languages", c:[{choice1:"Over 1 million languages"},{choice2:"Over 4 million languages"},{choice3:"Over 60 million languages"},{choice4:"Over 100 million languages"} ]},
    {q:"Who killed the four Jedi Masters: Saesee Tinn, Mace Windu, Kit Fisto, and Agen Kolar?", a:"Darth Sidious", c:[{choice1:"Darth "},{choice2:"Sidious"},{choice3:"Sidious Darth"},{choice4:"Darth Sidious"} ]},
    {q:"What is the name of Yoda’s home?", a:"Dagobah", c:[{choice1:"Skywalker"},{choice2:"Bothans"},{choice3:"Kashyyyk"},{choice4:"Dagobah"} ]},
    {q:"What is the name of General Grievous’ Flagship, which was not mentioned in the movie?", a:"The Invisible", c:[{choice1:"Madclaw"},{choice2:"The Invisible Hand"},{choice3:"THe Hand"},{choice4:"The Han"} ]},
    {q:"What is the Toydarian’s name who owned Anakin Skywalker?",a:"Watto", c:[{choice1:"Watto"},{choice2:"Madclaw"},{choice3:"Grand Moff Tarkin"},{choice4:"Skywalker"} ]}
]


// Timer that counts down from 5
function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }
  startBtn.onclick = countdown;