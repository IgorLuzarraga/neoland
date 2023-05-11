import { getImages } from "../../data/Memory.data";
//import { initControler } from "../route";
import { Routes, goToPage } from "../router";

export const randomize = () => {
  const cardData = getImages();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

export const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
    }
  }
};

export const restart = () => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
  });
};

export const resetGame = (move) => {
  const finish = document.querySelectorAll(".toggleCard");
  if (finish.length === 16) {
    setTimeout(() => alert("Has ganado"), 1000);
    const remove = document.querySelector("section");
    remove.innerHTML = "";
    remove.innerHTML = `
    <h2>MOVE: ${move}</h2> 
    <button class="resetButton">Play again</button> `;
    addListener(move);
  }
};

const addListener = () => {
  const buttonReset = document.querySelector(".resetButton");
  buttonReset.addEventListener("click", () => {
    //initControler("Memory");
    goToPage(Routes.MemoryGame2)
  });
};
