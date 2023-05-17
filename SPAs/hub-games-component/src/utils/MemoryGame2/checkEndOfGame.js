import { resetGame } from "./resetGame"

export const checkEndOfGame = (movesNumber)  => {
    const toggleCards = document.querySelectorAll(".memory-game-2-card-toggled")
    if (toggleCards.length === 12) resetGame(movesNumber)
}