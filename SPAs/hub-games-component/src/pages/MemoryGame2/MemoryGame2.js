import "./MemoryGame2.css";
import { Gameboard } from '../../components/MemoryGame2/Gameboard/Gameboard'

// -----> 1) Template

const template = () => `
  <div class="gameMemory">
    <div id='memory-game-gameboard'></div>
  </div>
`

// ----> 2) Ehtml events

const addListeners = () => {};

// ----> 3) Render
export const MemoryGame2 = () => {
  document.querySelector("main").innerHTML = template();
  Gameboard();
};
