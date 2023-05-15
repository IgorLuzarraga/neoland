//import { Foto } from "../../../data/hangman.data";
import { hangManImgs } from "../../../../public/hangmanImages";
import { Routes, goToPage } from "../../../utils/router";

import JSConfetti from "js-confetti";

const confeti = new JSConfetti();

let userTriesCounter = 0;

export const CheckUserInputLetter = (inputLetter, wordToGuess) => {
  const lettersArr = wordToGuess.split("")

  if (wordToGuess.includes(inputLetter)) {
    markLettersThatMatchWithUserInputLetter(inputLetter, lettersArr)

    const pElementsArr = document.querySelectorAll(".hangman-guessed-letter")
    
    if(checkIfUserWin(pElementsArr, lettersArr)) {
      showMsgIfUserWins()
    }
  } else {
    userTriesCounter++
    const hangmanImage = document.querySelector("#hangman-image")
    hangmanImage.setAttribute("src", `${hangManImgs[userTriesCounter]}`)

    const input = document.querySelector("#hangman-input-letter")
    input.value = ""

    showMsgIfUserLose(userTriesCounter)
  }
}

const markLettersThatMatchWithUserInputLetter = (
    inputLetter,
    lettersArr
    ) => {
        lettersArr.forEach((letter) => {
          if (inputLetter === letter) {
            const p = document.getElementById(`${inputLetter}`)
  
            p.innerHTML = inputLetter.toUpperCase()
            p.setAttribute("class", "hangman-guessed-letter")
  
            const input = document.querySelector("#hangman-input-letter")
            input.value = ""
          }
      })
}

const checkIfUserWin = (pElementsArr, lettersArr) => 
  pElementsArr.length === lettersArr.length 
  
const showMsgIfUserWins = () => {
    setTimeout(() => {
      const divContainer = document.querySelector("#hangman-container")
      divContainer.innerHTML = ""

      const divMsg = document.createElement("div")
      divMsg.innerHTML = "Awesome! You Win!"
      divMsg.setAttribute("id", "hangman-msg-user-win")
      
      const newGameBtn = document.createElement("button")
      newGameBtn.innerHTML = "Another one?"
      newGameBtn.setAttribute("id", "hangman-reset-game-btn")

      throwConfettyWin()

      divContainer.append(divMsg, newGameBtn)

      resetGame()
    }, 300)
  }

const showMsgIfUserLose = (counter) => {
  if(counter === 6) {
    setTimeout(() => {
      const div = document.querySelector("#hangman-container")
      div.innerHTML = "" 

      const divMsg = document.createElement("div")
      divMsg.innerHTML = "Ohh, You lose!"
      divMsg.setAttribute("id", "hangman-msg-user-lose")

      const newGameBtn = document.createElement("button")
      newGameBtn.innerHTML = "Another one?"
      newGameBtn.setAttribute("id", "hangman-reset-game-btn")

      div.append(divMsg, newGameBtn)

      throwConfettyLose()

      resetGame()
    }, 300)
  }
}

const throwConfettyWin = () => 
  confeti.addConfetti({
    emojis: ["🏆🥈😀🎉"], 
  })

const throwConfettyLose = () => 
  confeti.addConfetti({
    emojis: ["🤑☹😟😨"], 
  })

const resetGame = () => {
  const resetGame = document.querySelector("#hangman-reset-game-btn")

  resetGame.addEventListener("click", () => {
    userTriesCounter = 0

    const p = document.querySelectorAll(".hangman-word-letter")
    
    p.forEach((pElemen) => pElemen.remove())
    
    goToPage(Routes.HangMan)
  })
}
