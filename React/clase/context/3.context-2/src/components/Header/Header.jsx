import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <header>

      {showMsg(user)}

      <nav>
        {ifNotUserShowLogin(user)}
        {ifUserShowContent(user)}
        {showHome()}
        {ifUserShowLogout(user, logout)}
      </nav>
    </header>
  );
};

const showMsg = (user) =>
  user === null ? (
    <h1 className="titleHeader">Don't forget to log in</h1>
  ) : (
    <h1 className="titleHeader">Welcome back {user}</h1>
  )

const ifNotUserShowLogin = (user) =>
  user == null && <NavLink to="/login">Login</NavLink>

const ifUserShowContent = (user) =>
  user !== null && <NavLink to="/content">Content</NavLink>

const showHome = () =>
  <NavLink to="/">Home</NavLink>

const ifUserShowLogout = (user, logout) =>
  user !== null && <button onClick={() => logout()}>Logout</button>

export default Header;
