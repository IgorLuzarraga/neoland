// import {
//   checkCards,
//   randomize,
//   resetGame,
// } from "../../utils/MemoryGameUtil/memory.utils";
import {
  checkCards,
  randomize,
  resetGame,
} from "../../../utils/MemoryGame2/memory.utils";

//import { initControler } from "../../utils/route";

import { goToPage } from "../../../utils/router";

import "./cardMemory.css";
let move;
export const cardMemory = () => {
  move = 0;
  const cardData = randomize();

  const section = document.querySelector("section");

  // Hacemos un forEach para que me recorra el array y me cree una carta para cada objeto, con sus dos caras A y B y agregamos clases a cada tipo

  cardData.forEach((element) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // añadimos la info de las cartas
    face.src = element.imgSrc;
    back.src =
      "https://res.cloudinary.com/dq186ej4c/image/upload/v1683707231/pngwing.com_ujpnot.png";
    card.setAttribute("name", element.alt);
    // añadimos las cartas a la sección, y añadimos las caras A y B a las cartas
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    addListeners(card);
  });
};

const addListeners = (card) => {
  card.addEventListener("click", (e) => {
    move++;
    card.classList.toggle("toggleCard");
    checkCards(e);
    resetGame(move);
  });
};
