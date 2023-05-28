import "./MemoryGame2.css";
import { Gameboard } from '../../components/MemoryGame2/Gameboard/Gameboard'
import { Routes, goToPage } from "../../utils/router";

// -----> 1) Template

const template = () => `
  <div id="memory-game-2-container">
    <div id='memory-game-2-gameboard'></div>
    <div id='memory-game-2-display'>
        <div id="memory-game-2-counter-player-clicks">Clicks number: 0</div>
        <div id="memory-game-2-counter-matched-cars">Matches number: 0</div>
        <button id="memory-game-2-restartBtn">Restart</button>
    </div>
  </div>
`


// ----> 2) Html events

const addListeners = () => {
  addClickEventToResetTheGame()
};

const addClickEventToResetTheGame = () => {
  const buttonReset = document.querySelector("#memory-game-2-restartBtn")
  buttonReset.addEventListener("click", () => {
    goToPage(Routes.MemoryGame2)
  })
}

// ----> 3) Render
export const MemoryGame2 = () => {
  document.querySelector("main").innerHTML = template();
  addListeners()
  Gameboard();
};
