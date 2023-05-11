// Get DOM elements
const startQuizButton = document.querySelector('.quiz-intro-button');
const questionScreen = document.querySelector('.question-screen');
const questionText = document.querySelector('.question-screen h2');
const answerButtons = document.querySelectorAll('.question-screen li button');
const quizFinishScreen = document.querySelector('.quiz-finish-screen');
const scoreText = document.querySelector('.quiz-finish-screen p');
const initialsInput = document.querySelector('.quiz-finish-screen input');
const submitButton = document.querySelector('.quiz-finish-screen button');
const highscoresScreen = document.querySelector('.highscores-screen');
const highscoresList = document.querySelector('.highscores-screen ol');
const viewHighscoreButton = document.querySelector('.top-bar button');

// Define the quiz questions and answers
const quizQuestions = [
  {
    question: "Question 1: Who the only player in NFL History with 7 Super Bowl ring?",
    answers: ["Joe Montana", "Tom Brady", "Troy Akman", "Peyton Manning"],
    correctAnswer: "Tom Brady"
  },
  {
    question: "Question 2: Who has the most rushing yards in NFL history?",
    answers: ["Walter Payton", "Berry Sanders", "Emmitt Smith", "Frank Gore"],
    correctAnswer: "Emmitt Smith"
  },
  {
    question: "Question 3: Who holds the single season record for receiving touchdown?",
    answers: ["Jerry Rice", "Randy Moss", "DeVante Adams", "Mark Clayton"],
    correctAnswer: "Randy Moss"
  },
  {
    question: "Question 4: Who the only NFL team to go undefeated and win the Super Bowl?",
    answers: ["New Endgland Patriots", "Philladelphia Eagles", "Miami Dolphins", "New Orleans Saints"],
    correctAnswer: "Miami Dolphins"
  },
  {
    question: "Question 5: Who won the MVP last year?",
    answers: ["Jalin Hurts", "Josh Allen", "Patrick Mahomes", "Justin Jefferson"],
    correctAnswer: "Patrick Mahomes"
  },
  {
    question: "Question 6: Who holds the single season record for passing touchdown ?",
    answers: ["Peyton Manning", "Tome Brady", "Dan Marino", "Drew Brees"],
    correctAnswer: "Peyton Manning"
  },
  {
    question: "Question 7: Who won the 1986 Super Bowl?",
    answers: ["Las Vegas Raiders", "Pittsburgh steelers", "Chicago Bears", "Dallas Cowboys"],
    correctAnswer: "Chicago Bears"
  },{
    question: "Question 8: Who holds the most single season rushing record?",
    answers: ["Adrian Peterson", "Chris Johnson", "Eric Dickerson", "Berry Sanders"],
    correctAnswer: "Eric Dickerson"
  },{
    question: "Question 9: How many teams are in the NFL",
    answers: ["28", "32", "34", "30"],
    correctAnswer: "32"
  },{
    question: "Question 10: Who holds tthe most consecutive starts?",
    answers: ["Eli Manning", "Bill Romanowski", "Brett Favre", "Jim Marshall"],
    correctAnswer: "Brett Favre"
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;

// Start the quiz
startQuizButton.addEventListener('click', startQuiz);

// Function to start the quiz
function startQuiz() {
  questionScreen.style.display = 'block';
  showQuestion();
  startTimer();
}

// Function to show the current question
function showQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  questionText.textContent = question.question;

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = question.answers[i];
    answerButtons[i].addEventListener('click', selectAnswer);
  }
}

// Function to select an answer
function selectAnswer(event) {
  const selectedButton = event.target;
  const selectedAnswer = selectedButton.textContent;
  const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  questionScreen.style.display = 'none';
  quizFinishScreen.style.display = 'block';
  scoreText.textContent = `Your Score: ${score}`;
}

// Function to start the timer
function startTimer() {
  const timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// Save high score
submitButton.addEventListener('click', saveHighScore);

function saveHighScore() {
  const initials = initialsInput.value;
  const highscore = `${initials} - ${score}`;
  const highscoreItem = document.createElement('li');
  highscoreItem.textContent = highscore;
  highscoresList.appendChild(highscoreItem);

  initialsInput.value = '';
  quizFinishScreen.style.display = 'none';
  highscoresScreen.style.display = 'block';
}

// View highscores
viewHighscoreButton.addEventListener('click', showHighscores);

function showHighscores() {
  questionScreen.style.display
}