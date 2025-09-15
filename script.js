const keyboard = document.getElementById("keyboard");
const wordDisplay = document.getElementById("word-display");
const wrongLetters = document.getElementById("wrong-letters");
const guessLeft = document.getElementById("guesses-left");

let words = [
  "football",
  "crispy",
  "naruto",
  "blueberrie",
  "twentyonepilots",
  "hayat",
];

let guessCounter = 5;
// will implement soon
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
    }
    wrongLetters.innerText = "Wrong letters: " + incorrectLetters.join(", ");
    guessLeft.innerText = guessCounter;
  }

  button.disabled = true;
}

console.log(correctLetters);
// Handle how the game victory condition is. When the player gusses all correct letters before 5 incorrect attempts he wins
function handleGame() {}

let displayWord = randomWord.split("").map((ch) => (ch === "" ? "" : "_"));

function displayThyWord() {
  wordDisplay.innerText = displayWord.join("");
}
displayThyWord();
