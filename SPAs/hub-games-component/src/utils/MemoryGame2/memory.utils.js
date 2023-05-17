import { getImages } from "../../data/Memory.data";

export const shuffleCards = () =>
  getImages().sort(() => 0.5 - Math.random())

export const restart = () => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  cardData.forEach((item, index) => {
    cards[index].classList.remove("memory-game-2-card-toggled");
  });
};

