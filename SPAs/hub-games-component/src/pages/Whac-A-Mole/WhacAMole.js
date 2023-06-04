import "./WhacAMole.css";
import { randomTime } from "../../utils/Whac-A-Mole/randomTime";
import { HitMole } from "../../components/Whac-A-Mole/HitMole";
import { changePageColor } from '../../utils/Whac-A-Mole/changePageColor'
import JSConfetti from 'js-confetti'
import { Routes, goToPage } from "../../utils/router";

const jsConfetti = new JSConfetti() // Create JSConfetty just ones!

const template = () => `
  <div id="whac-a-mole-container">
    <div id="whac-a-mole-gameboard">
      <div class="whac-a-mole-hole whac-a-mole-hole1">
        <div class="whac-a-mole-mole"></div>
      </div>
      <div class="whac-a-mole-hole whac-a-mole-hole2">
        <div class="whac-a-mole-mole"></div>
      </div>
      <div class="whac-a-mole-hole whac-a-mole-hole3">
        <div class="whac-a-mole-mole"></div>
      </div>
      <div class="whac-a-mole-hole whac-a-mole-hole4">
        <div class="whac-a-mole-mole"></div>
      </div>
      <div class="whac-a-mole-hole whac-a-mole-hole5">
        <div class="whac-a-mole-mole"></div>
      </div>
      <div class="whac-a-mole-hole whac-a-mole-hole6">
        <div class="whac-a-mole-mole"></div>
      </div>
    </div>
    <div id="whac-a-mole-display">
        <div id="whac-a-mole-score">Score: 0</div>
        <button id="whac-a-mole-startGameBtn">Start</button>
    </div>
  </div>
`

let lastHole;
let timeUp = false; // When true --> game over 

// Game logic
const randomHole = () => {
  // Random Index
  const index = Math.floor(
    Math.random() * document.querySelectorAll(".whac-a-mole-hole").length
  );

  // Randpm hole
  const hole = document.querySelectorAll(".whac-a-mole-hole")[index];

  // We avoid that the mole go outside using the same hole
  if (hole === lastHole) {
    return randomHole(document.querySelectorAll(".whac-a-mole-hole"));
  }

  lastHole = hole;
  return hole;
};

const showMole = () => {
  // We define how much time the mole shows up
  const time = randomTime(500, 5000);

  // We add the hole to add the class up
  const hole = randomHole(document.querySelectorAll(".whac-a-mole-hole"));
  hole.classList.add("up");

  //SetTimeout to remove the claas 'up'
  setTimeout(() => {
    hole.classList.remove("up");

    // meanwhile timeUp is false,  the moles are up and running
    if (!timeUp) {
      showMole();
    }
  }, time);
};

const startGame = () => {
  timeUp = false;
  showMole();

  setTimeout(() => {
    timeUp = true;

    endOfGame()

  }, 15000);
};

const endOfGame = () => {
  setTimeout(() => {
    throwConfetty()

    // Start the game again
    goToPage(Routes.WhacAMole)
  }, 600)
}

const throwConfetty = () => {
  jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 1500,
  })
}

// Event listeners
const addListeners = () => {
  // We add a click event to each mole, to know when 
  // they have been clicked
  document
    .querySelectorAll(".whac-a-mole-mole")
    .forEach((mole) => mole.addEventListener("click", (e) => HitMole(e)));

  document.querySelector("#whac-a-mole-startGameBtn").addEventListener("click", startGame);
};

// Render
export const WhacAMole = () => {
  document.querySelector("main").innerHTML = template();
  changePageColor()
  addListeners();
};
