// Importing Elements
const input = document.getElementById("numberInput");
const submitBtn = document.getElementById("submitBtn");
const guessForm = document.querySelector("#guessForm");
const feedbackMessage = document.getElementById("feedbackMessage");
const historyBtn = document.getElementById("historyBtn");
const historyPopUp = document.getElementById("historyPopup");
const closeHistoryBtn = document.getElementById("closeHistoryBtn");
const historyTiles = document.getElementById("historyTiles");
const newGameBtn = document.getElementById("newGameBtn");
const bestScoreText = document.getElementById("best-score");

// Best Scores
let bestScore = Number(localStorage.getItem("bestScore") || 0);
bestScoreText.textContent = bestScore || "-";

// Attempts
let attempts = 0;
let attemptsCount = document.getElementById("attempts");

// History
const history = JSON.parse(localStorage.getItem("historyStore")) || [];

// Random Number Generator
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let randomNum = randomNumber();
console.log(randomNum)

// Submiting Form
guessForm.addEventListener("submit", function (event) {
  event.preventDefault();
  attempts++;

  if (input.value > randomNum) {

    feedbackMessage.textContent = `The ${input.value} is higher`;
    history.push(`The ${input.value} is higher`);

  } else if (input.value < randomNum) {

    feedbackMessage.textContent = `The ${input.value} is Lower`;
    history.push(`The ${input.value} is Lower`);

  } else {

    feedbackMessage.textContent = `The ${input.value} is Correct`;
    input.disabled = true;
    submitBtn.disabled = true;
    history.push(`The ${input.value} is Correct`);

    if(bestScore === 0 || attempts < bestScore){
      bestScore = attempts;
      
      localStorage.setItem("bestScore", bestScore);
      bestScoreText.textContent = bestScore;
      
    }

  }

  attemptsCount.innerHTML = attempts;
  localStorage.setItem("historyStore", JSON.stringify(history));
});

// History Popup
historyBtn.addEventListener("click", () => {
  historyPopUp.classList.add("open");
  const items = JSON.parse(localStorage.getItem("historyStore")) || [];
  historyTiles.innerHTML = items
    .map((item) => `<div class="history-tile">${item}</div>`)
    .join("");
});

closeHistoryBtn.addEventListener("click", () => {
  historyPopUp.classList.remove("open");
});

// New Game Start
newGameBtn.addEventListener("click", () => {
  localStorage.removeItem("historyStore");
  history.length = 0;

  attempts = 0;
  attemptsCount.innerHTML = attempts;

  input.disabled = false;
  submitBtn.disabled = false;
  input.value = "";

  feedbackMessage.textContent = "Enter a number between 1 and 100 and click Guess.";
  historyTiles.innerHTML = '<p class="empty-history">Your guesses will appear here.</p>';

  randomNum = randomNumber();
  console.log(randomNum)
});
