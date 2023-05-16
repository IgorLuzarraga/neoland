import { resetGame } from "./resetGame"

export const checkEndOfGame = (movesNumber)  => {
    const toggleCards = document.querySelectorAll(".memory-game-card-toggled")
    if (toggleCards.length === 12) resetGame(movesNumber)
}