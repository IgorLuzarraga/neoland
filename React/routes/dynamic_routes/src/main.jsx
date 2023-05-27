import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* We  tell to the BrowserRouter that our Router starts with the 
    initial route '/' */}
    <BrowserRouter basename="/">
      <Routes>
        {/* We start the different routes of our application */}
        <Route path="/" element={<App />}>
          {/* We're gonna use the Outlet to route the different pages
          of our application*/}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {console.log('About main')}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
