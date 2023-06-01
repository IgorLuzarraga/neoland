import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h1>
        Have a good one <span className="user-header-container">{user}</span>
      </h1>
    </header>
  )
};

export default Header;
