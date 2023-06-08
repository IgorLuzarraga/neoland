import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  // The NavLink shoul be the button's parent, to made the button 
  // clickable and navigable
  // If the NavLink is the button's child, the button just works
  // when I click the text, and we want tue complete button
  // be navigable

  return (
    <header>
      <nav>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/gallery">
          <button>Gallery</button>
        </NavLink>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
