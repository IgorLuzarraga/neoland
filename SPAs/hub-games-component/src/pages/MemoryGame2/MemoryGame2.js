import "./MemoryGame2.css";
//import { cardMemory } from "../../components/cardMemory/cardMemory";
import { cardMemory } from '../../components/MemoryGame2/cardMemory/cardMemory'
// -----> 1) Funcion de template

const template = () => `
<div class="gameMemory">/
<section></section>
</div>
`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {};

// ----> 3) Pintar
export const MemoryGame2 = () => {
  document.querySelector("main").innerHTML = template();
  cardMemory();
};
