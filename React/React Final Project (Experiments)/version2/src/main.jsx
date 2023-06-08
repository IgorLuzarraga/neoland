import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import About from "./pages/About/About.jsx";
import CharacterById from "./pages/CharacterById/CharacterById.jsx";
import CharacterByName from "./pages/CharacterByName/CharacterByName.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import MobileDevs from "./pages/MobileDevs/MobileDevs.jsx";
import Apps_inMobileDev from "./pages/Apps_inMobileDev/Apps_inMobileDev.jsx";
import Apps_inMobileDev2 from "./pages/Apps_inMobileDev2/Apps_inMobileDev2.jsx";

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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mobileDevs" element={<MobileDevs />} />
          <Route path="/about" element={<About />} />
          {/* <Route
            path="/mobileDev/apps/:id"
            element={<Apps_inMobileDev />}
          /> */}
          <Route
            path="/mobileDev/apps"
            element={<Apps_inMobileDev />}
          />
          {/* <Route
            path="/mobileDev/apps"
            element={<Apps_inMobileDev2 />}
          /> */}
          <Route
            path="/gallery/character/:id"
            element={<CharacterById />}
          />
          <Route
            path="/gallery/character/name/:name"
            element={<CharacterByName />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
