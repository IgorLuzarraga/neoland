import "./Anime.css";

// -----> 1) Funcion de template

const template = () => `Welcome to my Anime page! It's still under constriction!`;

// ----> 2) Eventos de nuestros elementos html

const addListeners = () => {};

// ----> 3) Pintar
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
