const quizData = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correct: 0
  },
  {
    question: "What does CSS control?",
    answers: ["Structure", "Styling", "Database"],
    correct: 1
  },
  {
    question: "Which language makes websites interactive?",
    answers: ["JavaScript", "Python", "C++"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  answersEl.innerHTML = "";
  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => checkAnswer(index));
    answersEl.appendChild(button);
  });
}

function checkAnswer(selected) {
  const q = quizData[currentQuestion];
  if (selected === q.correct) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultEl.innerText = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();
nextBtn.style.display = "none";
