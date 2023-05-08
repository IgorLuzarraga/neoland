import "./Anime.css";

// Template
const template = () => `
    <div id='main-container'>
      <div id='anime-container'>
        <p>Welcome to my Anime page! It's still under constriction!</p>
      </div>
    </div>
  `
  
// Events
const addListeners = () => {};

// Render
export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
};
