import { Routes, goToPage } from "../../utils/router";
import "./Login.css";

// 1. Template

const template = () => `
  <div id='main-container'>
    <div id='login-container'>
      <input type="text" name="" id="" />
      <button id="buttonLogin">LOGIN</button>
    </div>
  </div>
`;

// Listeners to receive users events

const addListeners = () => {
  document
    .getElementById("buttonLogin")
    .addEventListener("click", () => {
      const inputLogin = document.querySelector("input");
      localStorage.setItem("user", inputLogin.value);

      if (localStorage.getItem("user"))
        document.querySelector("nav").style.display = "flex";
      
      goToPage(Routes.NotLogged)
  })
}

// Render
export const printTemplate = () => {
  if (!localStorage.getItem("user"))
    document.querySelector("nav").style.display = "none";

  document.querySelector("main").innerHTML = template();
  
  addListeners();
};
