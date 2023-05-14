import { changePageColor } from "../../utils/Login/changePageColor";
import { Routes, goToPage } from "../../utils/router";
import "./Login.css";

// 1. Template

const template = () => `
  <div id='login-container-main'>
    <div id="login-msg-welcome">Let's Start Gaming!</div>
    <div id="login-msg-user-name">Before having fun, give us a name</div>
    <div id='login-display-container'>
      <input type="text" id="login-input" placeholder="Your name"/>
      <button id="login-btn">LOGIN</button>
    </div>
  </div>
`;

// Listeners to receive users events

const addListeners = () => {
  document
    .getElementById("login-btn")
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
  changePageColor()
  addListeners();
};
