let currentQuestion = 1; // Track the current question
let score = 0; // Begins with the score at 0

const questions = [
  // All of the questions, answers, and correct answer index
  {
    question:
      'What is a binary variable, having two possible values called "true" and "false"?',
    answers: ["String", "Boolean", "Function", "Array"],
    correct: [1],
  },
  {
    question: "Who is the father/founder of Javascript?",
    answers: ["Bill Gates", "Elon Musk", "Steve Jobs", "Brendan Eich"],
    correct: [3],
  },
  {
    question:
      "What is one of Javascript's data types that is used to store various keyed collections and more complex entities?",
    answers: ["String", "Boolean", "Object", "Array"],
    correct: [2],
  },
  {
    question:
      "What enables storing a collection of multiple items under a single variable name?",
    answers: ["Function", "Object", "Array", "Element"],
    correct: [2],
  },
  {
    question: "What does the number '4294967295' mean in Javascript?",
    answers: [
      "Hello World",
      "Maximum amount of indexes for an array",
      "Age of Javascript",
      "Deletes Everything",
    ],
    correct: [1],
  },
  {
    question: "What gives a name to the data to be passed in a function?",
    answers: ["Parameters", "PentaMeters", "Pentagon Meteors", "Param Eaters"],
    correct: [0],
  },
  {
    question:
      "What index number is Poppy in the following array? [Benji, Poppy, Snickers, Maggie]",
    answers: ["0", "4", "1", "2"],
    correct: [2],
  },
  {
    question: "Which symbol combination performs a comment is javascript?",
    answers: ["/*", "!--", "<-->", "//"],
    correct: [3],
  },
  {
    question:
      "What is Javascript looking for in the parentheses of a 'for' statement?",
    answers: [
      "a truthy statement",
      "a falsey statement",
      "Hello, World",
      "Your IP address",
    ],
    correct: [0],
  },
  {
    question:
      "If you exit a browser, where is your website data stored so that it is not lost?",
    answers: [
      "sessionStorage",
      "globalStorage",
      "internetFolder",
      "localStorage",
    ],
    correct: [3],
  },
];

let clock = document.getElementById("timer");
var startBttn = document.getElementById("start-quiz");

startBttn.addEventListener("click", startQuiz);

// The function that starts quiz upon clicking start button
function startQuiz() {
  countdown();
  startbtnhide();
  noScore();
  updateScoreDisplay();
  document.getElementById("timer").style.display = "block";

  displayQuestion(currentQuestion);
}

// The function executing the countdown

function countdown() {
  var secondsLeft = 31;

  var timerInterval = setInterval(function () {
    secondsLeft--;
    clock.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

// Hides the start button after it is clicked

function startbtnhide() {
  document.getElementById("start-quiz").style.display = "none";
}

// This function displays the current question and choices and makes it ready to be answered

function displayQuestion(questionNumber) {
  //questionNumber represents index of displayed question
  if (questionNumber <= questions.length) {
    // checks if questionNumber index is less than total number of questions
    const questionData = questions[questionNumber - 1];

    document.getElementById("questionSetup").textContent =
      questionData.question; // Updates the text content

    for (let i = 0; i < 4; i++) {
      const answerButton = document.getElementById(`answer${i + 1}`);
      answerButton.textContent = questionData.answers[i];
      answerButton.style.display = "block";
    }
  }
}



// Set up event listeners for all answers

for (let i = 1; i <= 10; i++) {
  const allAnswers100 = document.getElementById(`answer${i}`);
  if(allAnswers100) {
  allAnswers100.addEventListener("click", function () {
    const questionData = questions[currentQuestion - 1];
    const selectedAnswerIndex = i - 1; // Convert button index to answer index

    if (questionData.correct.includes(selectedAnswerIndex)) {
      score += 50; // Increment the score for a correct answer
    } else {
      score -= 25; // Subtract 25 points for a wrong answer
    }

    currentQuestion++; // Move to the next question
    displayQuestion(currentQuestion); // Display the next question
    updateScoreDisplay(); // Update the score display
});
  }
}


// Updates the score in top left corner
function updateScoreDisplay() {
  document.getElementById("score").textContent = "Score: " + score;
}

function noScore() {
  document.getElementById("score").style.display = "block";
}

//Performs this function when the clock timer hits 0
function sendMessage() {
  if (score === 500) {
    alert("100 bonus points added for perfection!");
    var newScore = score + 100;
    alert("New Score: " + newScore + "pts");
    bonusPoints();
    resetPage();
  } else {
    alert("Time's Up! Your  Score: " + score + "pts");
    resetPage();
  }
}

//Adds 500 bonus points to the score if all answers were guessed correctly
function bonusPoints() {
  if (score === 500) {
    score += 100;
    updateScoreDisplay();
  }
  return score;
}

function resetPage() {
  // Clear the question text
  goodWork();

  // Hide the answer buttons
  for (let i = 1; i <= 10; i++) {
    document.getElementById(`answer${i}`).style.display = "none";
  }

  // Reset the current question and score to initial values
  currentQuestion = 1;
  score = 0;
}

function goodWork() {
  document.getElementById("questionSetup").textContent =
    "Good work! You scored a " + score + "!";
  document.getElementById("questionSetup").style.textAlign = "center";
  document.getElementById("questionSetup").style.fontSize = "50px";

  // Retrieve existing scores from local storage
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Create and display the form for entering initials
  const initialsForm = document.createElement("form");

// initials form styling
  initialsForm.style.display = "flex";
  initialsForm.style.flexDirection = "column";
  initialsForm.style.alignItems = "center";
  initialsForm.style.justifyContent = "center";
  initialsForm.style.height = "100vh";
  initialsForm.style.marginTop = "-400px";

  const initialsInput = document.createElement("input");

// initials input styling
  initialsInput.style.width = "300px"; // Adjust the width as needed
  initialsInput.style.fontSize = "24px"; //

  const submitButton = document.createElement("button");

// submit button styling
  submitButton.style.fontSize = "24px";

  initialsInput.placeholder = "Enter your initials";
  submitButton.textContent = "Submit";
  initialsForm.appendChild(initialsInput);
  initialsForm.appendChild(submitButton);
  document.body.appendChild(initialsForm);

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const initials = initialsInput.value;
    if (initials) {
      // Add the score and initials to the list
      highScores.push({ score, initials });

      // Sort scores in descending order
      highScores.sort((a, b) => b.score - a.score);

      // Take the top 5 scores
      highScores.splice(5);

      // Update local storage with the updated scores
      localStorage.setItem("highScores", JSON.stringify(highScores));

      // Remove the form after submission
      document.body.removeChild(initialsForm);

    
      const newUl = document.createElement("ul");
      newUl.style.listStyle = "none";
      document.body.appendChild(newUl);

      // Creates Highscores List
      const newLi = document.createElement("li");
      newLi.textContent = "HIGH SCORES:";
      newLi.style.textAlign = "center";
      newLi.style.fontSize = "48px";
      newLi.style.color = "#323232";
      newUl.appendChild(newLi);

      for (let i = 0; i < highScores.length; i++) {
        const newLi = document.createElement("li");
        newLi.textContent =
          i + 1 + ". " + highScores[i].initials + " - " + highScores[i].score;

          // styling for high scores
        newLi.style.textAlign = "center";
        newLi.style.fontSize = "32px";
        newLi.style.color = "#323232";
        newLi.style.paddingTop = "15px";

        newUl.appendChild(newLi);
      }
    }
  });
}
