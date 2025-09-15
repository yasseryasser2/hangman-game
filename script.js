const keyboard = document.getElementById("keyboard");
const wordDisplay = document.getElementById("word-display");
const wrongLetters = document.getElementById("wrong-letters");
const guessLeft = document.getElementById("guesses-left");
const figureParts = document.querySelectorAll(".figure-part");

let words = [
  "daha mutlu olamam",
  "dogru yanlis",
  "gul kendine",
  "hayat",
  "hep ayni",
  "eksik",
  "orda durma",
  "gece",
  "bazen",
  "canli yayin",
  "bir",
];

let guessCounter = 6;
let correctLetters = [];
let incorrectLetters = [];

let randomElement = Math.floor(Math.random() * words.length);
const randomWord = words[randomElement];
console.log(randomWord);

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

alphabet.forEach((letter) => {
  const button = document.createElement("button");
  button.innerText = letter;

  button.addEventListener("click", () => handleGuess(letter, button));
  keyboard.append(button);
});

function handleGuess(letter, button) {
  let foundMatch = false;

  for (let i = 0; i < randomWord.length; i++) {
    let currentChar = randomWord[i];
    if (currentChar === letter) {
      displayWord[i] = letter;
      foundMatch = true;
    }
  }

  if (foundMatch) {
    if (!correctLetters.includes(letter)) {
      correctLetters.push(letter);
    }
    displayThyWord();
  } else {
    if (!incorrectLetters.includes(letter)) {
      incorrectLetters.push(letter);
      guessCounter--;
      updateFigure();
    }
    wrongLetters.innerText = "Wrong letters: " + incorrectLetters.join(", ");
    guessLeft.innerText = "Guesses left: " + guessCounter;
  }

  handleGame();
  button.disabled = true;
}

function handleGame() {
  if (!displayWord.includes("_")) {
    wordDisplay.innerText = displayWord.join("") + " You win!";
    disableAllButtons();
    return;
  }

  if (guessCounter <= 0) {
    wordDisplay.innerText = "Word was: " + randomWord + "     You lost!";
    disableAllButtons();
  }
}

let displayWord = randomWord.split("").map((ch) => (ch === " " ? " " : "_"));

function displayThyWord() {
  wordDisplay.innerText = displayWord.join("");
}
displayThyWord();

function disableAllButtons() {
  let buttons = keyboard.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));
}

function updateFigure() {
  const errors = incorrectLetters.length;
  figureParts.forEach((part, index) => {
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });
}
