const keyboard = document.getElementById("keyboard");
const wordDisplay = document.getElementById("word-display");

let words = [
  "Football",
  "Crispy",
  "Naruto",
  "Blueberrie",
  "Twentyonepilots",
  "hayat",
];

// will implement soon
let correctLetters = [];
let incorrectLetters = [];

let randomElement = Math.floor(Math.random() * words.length);
const randomWord = words[randomElement];
console.log(randomWord);

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
alphabet.forEach((letter) => {
  const button = document.createElement("button");
  button.innerText = letter;

  button.addEventListener("click", () => handleGuess(letter, button));
  keyboard.append(button);
});

// Handle the guess logic not implemented yet
function handleGuess(letter, button) {
  console.log("You clicked:", letter);
  button.disabled = true;
}

let displayWord = ["_", "_", "_", "_", "_", "_"];

function renderThyWord() {
  wordDisplay.innerText = displayWord.join("");
}

renderThyWord();
