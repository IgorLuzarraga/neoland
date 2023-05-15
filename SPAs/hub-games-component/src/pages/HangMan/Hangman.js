import "./Hangman.css";
import { CheckUserInputLetter } from "../../components/HangMan/CheckUserInputLetter/CheckUserInputLetter";
import { StartGame } from "../../components/HangMan/StartGame/StartGame";
import { getRandomWord } from "../../utils/HangMan/randomWord";
import { changePageColor } from "../../utils/HangMan/changePageColor";

// 1) Template
const template = () => `
  <div id="hangman-container-main">
    <div id="hangman-container">
      <div id="hangman-title">Hangman</div>
      <div id="handman-word-and-display-container">
        <img id="hangman-image" src="https://res.cloudinary.com/dtkuzehsp/image/upload/v1683670674/hangman1_in5wob.jpg"/>
        <div id="handman-display">
          <div id="handman-word"></div>
          <input id="hangman-input-letter" type="textarea" placeholder="A letter please" maxlength="1"/>
          <button id="hangman-try-btn">Try</button>
        </div>
      </div>
    </div>
  </div>
`

// 2) Add Listeners to events
const addListeners = (wordToGuess) => {
  const tryBtn = document.querySelector("#hangman-try-btn")
  tryBtn.addEventListener("click", () => {
    const input = document.querySelector("#hangman-input-letter")

    CheckUserInputLetter(input.value, wordToGuess)
  })
}

// 3) Render
export const HangMan = () => {
  document.querySelector("main").innerHTML = template()
  changePageColor()
  const wordToGuess = getRandomWord()
  StartGame(wordToGuess)
  addListeners(wordToGuess)
};
