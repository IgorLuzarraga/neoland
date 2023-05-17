import { Routes, goToPage } from "../router";

export const resetGame = (movesNumber) => {
    const remove = document.querySelector("#memory-game-2-gameboard")
    remove.innerHTML = ""
    
    remove.innerHTML = `
      <h2>MOVE: ${movesNumber}</h2> 
      <button class="resetButton">Play again</button>`

    addClickEventToResetTheGame()
}
  
const addClickEventToResetTheGame = () => {
    const buttonReset = document.querySelector(".resetButton")
    buttonReset.addEventListener("click", () => {
      goToPage(Routes.MemoryGame2)
    })
}