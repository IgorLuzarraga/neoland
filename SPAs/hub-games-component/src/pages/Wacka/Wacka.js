import "./Wacka.css";
import { randomTime } from "../../utils/Wacka/randomTime";
import { Wack } from "../../components/Wacka/Wacka";
import { changePageColor } from '../../utils/Wacka/changePageColor'


const template = () => `
    <div class="interface">
      <div class="wacka-title">Wacka Mole</div>
      <div class="score-start-row">
        <span class="score">0</span>
        <button id="startGame">Start</button>
      </div>
    </div>
    <div class="game">
      <div class="hole hole1">
        <div class="mole"></div>
      </div>
      <div class="hole hole2">
        <div class="mole"></div>
      </div>
      <div class="hole hole3">
        <div class="mole"></div>
      </div>
      <div class="hole hole4">
        <div class="mole"></div>
      </div>
      <div class="hole hole5">
        <div class="mole"></div>
      </div>
      <div class="hole hole6">
        <div class="mole"></div>
      </div>
    </div>
`;



let lastHole; // --> Último hoyo
let score = 0; // --> Puntuacion
let timeUp = false; // --> Indica cuando se acaba el tiempo



// Game logic
const randomHole = () => {
  //Index aleatorio
  const index = Math.floor(
    Math.random() * document.querySelectorAll(".hole").length
  );
  //Hoyo aleatorio
  const hole = document.querySelectorAll(".hole")[index];
  //Evitamos que el topo salga dos veces por el mismo hoyo
  if (hole === lastHole) {
    return randomHole(document.querySelectorAll(".hole"));
  }

  lastHole = hole;
  return hole;
};

const showMole = () => {
  //Definimos el tiempo que el topo se mantiene asomado
  const time = randomTime(500, 5000);

  //Seleccionamos hoyo para añadirle la clase up
  const hole = randomHole(document.querySelectorAll(".hole"));
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
  score = 0;
  showMole();

  setTimeout(() => {
    timeUp = true;
  }, 15000);
};

// Event listeners
const addListeners = () => {
  //Añadimos a los topos el escuchador del click para saber cuando han clicado
  document
    .querySelectorAll(".mole")
    .forEach((mole) => mole.addEventListener("click", (e) => Wack(e)));

  document.querySelector("#startGame").addEventListener("click", startGame);
};

// Render
export const Wacka = () => {
  document.querySelector("main").innerHTML = template();
  changePageColor()
  addListeners();
};
