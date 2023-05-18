export const checkCards = (e) => {
    const clickedCard = e.target
    clickedCard.classList.add("memory-game-2-card-flipped")
    
    const flippedCards = document.querySelectorAll(".memory-game-2-card-flipped")
  
    if (flippedCards.length === 2) {
      if (checkIfCardsMatch(flippedCards)) {
        updateMatchesCounter()
        dontAllowToFlipAgain(flippedCards)
      } else {
        removeFlipAndToggleClasses(flippedCards)
      }
    }
}

const getMatchesCounterFromHtmlEl = (matchesCounter) => 
  matchesCounter
    .innerHTML
    .replace(/\D/g, "")

const updateMatchesCounter = () => {
  const matchesCounterHtml = document.getElementById('memory-game-2-counter-matched-cars')

  let matchesCounterNum = getMatchesCounterFromHtmlEl(matchesCounterHtml)

  matchesCounterHtml.innerHTML = `Matches number: ${++matchesCounterNum}`
}

const checkIfCardsMatch = (flippedCards) => 
    flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")

const dontAllowToFlipAgain = (flippedCards) =>
    flippedCards.forEach((card) => {
        card.classList.remove("memory-game-2-card-flipped")
        card.style.pointerEvents = "none"
   })

const removeFlipAndToggleClasses = (flippedCards) =>
  flippedCards.forEach((card) => {
    card.classList.remove("memory-game-2-card-flipped")
    setTimeout(() => card.classList.remove("memory-game-2-card-toggled"), 1000)
  })