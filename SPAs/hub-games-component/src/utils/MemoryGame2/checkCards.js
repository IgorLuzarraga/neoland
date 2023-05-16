export const checkCards = (e) => {
    const clickedCard = e.target
    clickedCard.classList.add("memory-game-card-flipped")
    
    const flippedCards = document.querySelectorAll(".memory-game-card-flipped")
  
    if (flippedCards.length === 2) {
      if (checkIfCardsMatch(flippedCards)) {
        dontAllowToFlipAgain(flippedCards)
      } else {
        removeFlipAndToggleClasses(flippedCards)
      }
    }
}

const checkIfCardsMatch = (flippedCards) => 
    flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")

const dontAllowToFlipAgain = (flippedCards) =>
    flippedCards.forEach((card) => {
        card.classList.remove("memory-game-card-flipped")
        card.style.pointerEvents = "none"
   })

const removeFlipAndToggleClasses = (flippedCards) =>
  flippedCards.forEach((card) => {
    card.classList.remove("memory-game-card-flipped")
    setTimeout(() => card.classList.remove("memory-game-card-toggled"), 1000)
  })