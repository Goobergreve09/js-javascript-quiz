// // let questionOne = ['What is a binary variable, having two possible values called "true" and "false"?']
// // let questionTwo = ["Who is the father/founder of Javascript?"]
//  let questionThree = ["What is one of Javascript's data types that is used to store various keyed collections and more complex entities "]
// // // let questionFour = ["What enables storing a collection of multiple items under a singe variable name?"]
// // // let questionFive = ["What does the number 4294967295 mean in Javascript?"]




// let questionOne = 'What is a binary variable, having two possible values called "true" and "false"?';
// let questionTwo = 'Who is the father/founder of Javascript?';
// // ... Define other questions similarly

// let clock = document.getElementById("timer");

// document.getElementById("start-quiz").addEventListener("click", startQuiz);

// function startQuiz() {
//     countdown();
//     startbtnhide();
//     document.getElementById("timer").style.display = "block";
//     firstQuestion();
// }

// function countdown() {
//     var secondsLeft = 31;

//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         clock.textContent = secondsLeft;

//         if (secondsLeft === 0) {
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//             // Calls function to create and append image
//             sendMessage();
//         }
//     }, 1000);
// }

// function startbtnhide() {
//     document.getElementById("start-quiz").style.display = "none";
// }

// // Function for the first question
// function firstQuestion() {
//     document.getElementById("questionSetup").textContent = questionOne;
//     let answerOne = "String";
//     let answerTwo = "Boolean";
//     let answerThree = "Function";
//     let answerFour = "Array";

//     document.getElementById("questionSetup").textContent = questionOne;
//     document.getElementById("answer1").textContent = answerOne;
//     document.getElementById("answer2").textContent = answerTwo;
//     document.getElementById("answer3").textContent = answerThree;
//     document.getElementById("answer4").textContent = answerFour;

//     document.getElementById("answer1").style.display = "block";
//     document.getElementById("answer2").style.display = "block";
//     document.getElementById("answer3").style.display = "block";
//     document.getElementById("answer4").style.display = "block";
// }

// document.getElementById("answer1").addEventListener("click", nextQuestion1);
// document.getElementById("answer2").addEventListener("click", nextQuestion1);
// document.getElementById("answer3").addEventListener("click", nextQuestion1);
// document.getElementById("answer4").addEventListener("click", nextQuestion1);

// function nextQuestion1() {
//     document.getElementById("questionSetup").textContent = questionTwo;

//     let answerOne = "Bill Gates";
//     let answerTwo = "Elon Musk";
//     let answerThree = "Steve Jobs";
//     let answerFour = "Brendan Eich";

//     document.getElementById("answer1").textContent = answerOne;
//     document.getElementById("answer2").textContent = answerTwo;
//     document.getElementById("answer3").textContent = answerThree;
//     document.getElementById("answer4").textContent = answerFour;
// }

// document.getElementById("answer1").addEventListener("click", nextQuestion2);
// document.getElementById("answer2").addEventListener("click", nextQuestion2);
// document.getElementById("answer3").addEventListener("click", nextQuestion2);
// document.getElementById("answer4").addEventListener("click", nextQuestion2);

// function nextQuestion2 () {
//     document.getElementById("questionSetup").textContent = questionThree;

//     let answerOne = "String";
//     let answerTwo = "Boolean";
//     let answerThree = "Object";
//     let answerFour = "Array";

//     document.getElementById("answer1").textContent = answerOne;
//     document.getElementById("answer2").textContent = answerTwo;
//     document.getElementById("answer3").textContent = answerThree;
//     document.getElementById("answer4").textContent = answerFour;

// }


let currentQuestion = 1; // Track the current question
let score = 0;
let timerInterval;

const questions = [
    {
        question: 'What is a binary variable, having two possible values called "true" and "false"?',
        answers: ["String", "Boolean", "Function", "Array"],
        correct: [1]
    },
    {
        question: 'Who is the father/founder of Javascript?',
        answers: ["Bill Gates", "Elon Musk", "Steve Jobs", "Brendan Eich"],
        correct: [3]
    },
    {
        question: "What is one of Javascript's data types that is used to store various keyed collections and more complex entities?",
        answers: ["String", "Boolean", "Object", "Array"],
        correct: [2]
    },
    {
        question: "What enables storing a collection of multiple items under a single variable name?",
        answers: ["Function", "Object", "Array", "Element" ],
        correct: [2]
    },
    {
        question: "What does the number '4294967295' mean in Javascript?",
        answers: ["Hello World", "Maximum amount of indexes for an array", "Age of Javascript","Deletes Everything"],
        correct: [1]
    },
    {
        question:"What gives a name to the data to be passed in a function?",
        answers: ["Parameters", "PentaMeters", "Pentagon Meteors","Param Eaters"],
        correct: [0]
    },
    {
        question: "What index number is Poppy in the following array? [Benji, Poppy, Snickers, Maggie]",
        answers: ["0", "4", "1", "2"],
        correct: [2],
    },
    {
        question: "Which symbol combination performs a comment is javascript?",
        answers: ["/*", "!--","<-->", "//"],
        correct: [3],
    },
    {
        question: "What is Javascript looking for in the parentheses of a 'for' statement?",
        answers: ["a truthy statement", "a falsey statement", "Hello, World", "Your IP address"],
        correct: [0],
    },
     {
        question:"If you exit a browser, where is your website data stored so that it is not lost?",
        answers: ["sessionStorage", "globalStorage", "internetFolder", "localStorage"],
        correct: [3],
     }
    // Define other questions in a similar way
];

let clock = document.getElementById("timer");

document.getElementById("start-quiz").addEventListener("click", startQuiz);

function startQuiz() {
    countdown();
    startbtnhide();
    noScore ();
    updateScoreDisplay();
    document.getElementById("timer").style.display = "block";
  
    displayQuestion(currentQuestion);
}

function countdown() {
    var secondsLeft = 31;

    var timerInterval = setInterval(function() {
        secondsLeft--;
        clock.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function startbtnhide() {
    document.getElementById("start-quiz").style.display = "none";
}

function displayQuestion(questionNumber) {
    if (questionNumber <= questions.length) {
        const questionData = questions[questionNumber - 1];

        document.getElementById("questionSetup").textContent = questionData.question;

        for (let i = 0; i < 4; i++) {
            const answerButton = document.getElementById(`answer${i + 1}`);
            answerButton.textContent = questionData.answers[i];
            answerButton.style.display = "block";
        }
    }
}

// Set up event listeners for all answers once
for (let i = 1; i <= 10; i++) {
    document.getElementById(`answer${i}`).addEventListener("click", function () {
        const questionData = questions[currentQuestion - 1];
        const selectedAnswerIndex = i - 1; // Convert button index to answer index

        if (questionData.correct.includes(selectedAnswerIndex)) {
            
            score+= 50; // Increment the score
        }

        currentQuestion++; // Move to the next question
        displayQuestion(currentQuestion); // Display the next question
        updateScoreDisplay(); // Update the score display
    });
}

function updateScoreDisplay() {
    document.getElementById("score").textContent = "Score: " + score;
}


  function noScore () {
    document.getElementById("score").style.display = "block";
  }



  function sendMessage() {
    if (score === 500) {
        alert("100 bonus points added for perfection!");
        var newScore = score + 100;
        alert("New Score: " + newScore + "pts");
        bonusPoints();
    } else {
        alert("TIME'S UP! You Scored: " + score + "pts");
    }
}





function bonusPoints () {
    if(score === 500) {
    score += 100;
    updateScoreDisplay();
} 
return score;
}





