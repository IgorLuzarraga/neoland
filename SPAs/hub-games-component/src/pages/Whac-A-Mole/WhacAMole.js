import "./WhacAMole.css";
import { randomTime } from "../../utils/Whac-A-Mole/randomTime";
import { HitMole } from "../../components/Whac-A-Mole/HitMole";
import { changePageColor } from '../../utils/Whac-A-Mole/changePageColor'

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

let lastHole; // --> Último hoyo
//let score = 0; // --> Puntuacion
let timeUp = false; // --> Indica cuando se acaba el tiempo



// Game logic
const randomHole = () => {
  //Index aleatorio
  const index = Math.floor(
    Math.random() * document.querySelectorAll(".whac-a-mole-hole").length
  );
  //Hoyo aleatorio
  const hole = document.querySelectorAll(".whac-a-mole-hole")[index];
  //Evitamos que el topo salga dos veces por el mismo hoyo
  if (hole === lastHole) {
    return randomHole(document.querySelectorAll(".whac-a-mole-hole"));
  }

  lastHole = hole;
  return hole;
};

const showMole = () => {
  //Definimos el tiempo que el topo se mantiene asomado
  const time = randomTime(500, 5000);

  //Seleccionamos hoyo para añadirle la clase up
  const hole = randomHole(document.querySelectorAll(".whac-a-mole-hole"));
  hole.classList.add("up");

  //SetTimeout para elimimar la clase

  setTimeout(() => {
    hole.classList.remove("up");

    // Siempre que el tiempo de la partida no haya acabado seguiremos asomando topos
    if (!timeUp) {
      showMole();
    }
  }, time);
};

const startGame = () => {
  timeUp = false;
  //score = 0;
  showMole();

  setTimeout(() => {
    timeUp = true;
  }, 15000);
};

// Event listeners
const addListeners = () => {
  //Añadimos a los topos el escuchador del click para saber cuando han clicado
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
