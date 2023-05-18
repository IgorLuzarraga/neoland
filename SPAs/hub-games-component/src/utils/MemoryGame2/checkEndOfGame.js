import { resetGame } from "./resetGame"

const isEndOfGame = () =>
    toggleCards.length === 12

export const checkEndOfGame = (movesNumber)  => {
    const toggleCards = document.querySelectorAll(".memory-game-2-card-toggled")
    if (isEndOfGame()) resetGame(movesNumber)
}