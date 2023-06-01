import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./contexts/userContext.jsx";

/// lo que vamos a hacer con el provider es grapear a los componetes que queremos que tengan
// .... acceso a los diferentes valores y nuestro contesto
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
