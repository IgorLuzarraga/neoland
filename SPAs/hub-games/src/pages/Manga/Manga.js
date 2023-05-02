import "./Manga.css";

// Template
const template = () => `
    <div id='main-container'>
      <div id='manga-container'>
        <p>Welcome to my Manga page! It's still under constriction!</p>
      </div>
    </div>
  `

// Events
const addListeners = () => {};

// Render
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
