import "./Gameboard.css";
import { shuffleCards } from "../../../utils/MemoryGame2/memory.utils";

import { checkCards } from "../../../utils/MemoryGame2/checkCards";
import { checkEndOfGame } from "../../../utils/MemoryGame2/checkEndOfGame";

let moves;
export const Gameboard = () => {
  moves = 0
  const cards = shuffleCards()

  const gameboard = document.getElementById("memory-game-2-gameboard")

  // Create a card Html element for each img that we have in cards
  cards.forEach((card) => {
    const cardDiv = document.createElement("div")
    const frontImg = document.createElement("img")
    const backImg = document.createElement("img")

    cardDiv.classList = "card"
    frontImg.classList = "memory-game-2-card-front-side"
    backImg.classList = "memory-game-2-card-back-side"

    // Add the images to the card's front and back sides
    frontImg.src = card.imgSrc
    backImg.src =
      "https://res.cloudinary.com/dq186ej4c/image/upload/v1683707231/pngwing.com_ujpnot.png"

    cardDiv.setAttribute("name", card.alt)

    cardDiv.append(frontImg, backImg)
    gameboard.appendChild(cardDiv)
    
    addEventClick(cardDiv)
  })
}

const updateClickCounter = (moves) => {
  const clicksCounter = document.getElementById('memory-game-2-counter-player-clicks')
  clicksCounter.innerHTML = `Clicks number: ${moves}`
}

const addEventClick = (card) => 
  card.addEventListener("click", (e) => {
    moves++
    card.classList.toggle("memory-game-2-card-toggled")
    updateClickCounter(moves)
    checkCards(e)
    checkEndOfGame(moves)
  })

