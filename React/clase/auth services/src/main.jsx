import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import { Protected } from "./components/Protected.jsx";
import Login from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import CheckCode from "./pages/CheckCode.jsx";
import { AuthContextProvider } from "./contexts/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* No tienen proteccion de rutas */}
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verifyCode" element={<CheckCode />} />

            {/* Tiene proteccion de rutas */}
            <Route
              path="/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
