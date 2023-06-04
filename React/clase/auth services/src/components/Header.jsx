import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../contexts/authContext";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <header>
        {user == null ? (
          <div className="titleFatherContainer">
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685704450/user-3296_rtszbc.png"
              alt="logo"
              className="logo"
            />
            <div className="titleContainer">
              <h3 className="titleHeader">USER PAGE</h3>
              <h3 className="titleHeaderBlack">USER PAGE</h3>
            </div>
          </div>
        ) : (
          <div className="titleFatherContainer">
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685704450/user-3296_rtszbc.png"
              alt="logo"
              className="logo"
            />
            <div className="titleContainer">
              <h1 className="titleHeader">Bienvenido de nuevo {user}</h1>
              <h1 className="titleHeaderBlack">Bienvenido de nuevo {user}</h1>
            </div>
          </div>
        )}
        <nav>
          {user == null && (
            <NavLink to="/login">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705523/login_ljn9fb.png"
                alt=""
                className="iconNav"
              />
            </NavLink>
          )}
          {user !== null && (
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685706203/9e3c325bca17c2147d249237c5a0906b_qhqifa.png"
              alt=""
              className="iconNav"
              onClick={() => logout()}
            />
          )}
          {user !== null && (
            <NavLink to="/dashboard">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705689/dashboard-statistics-5492_rnmxcl.png"
                alt=""
                className="iconNav"
              />
            </NavLink>
          )}

          <NavLink to="/">
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705455/home_circle_outline_icon_139029_xdnnt2.png"
              alt=""
              className="iconNav home"
            />
          </NavLink>
          {user !== null && <button onClick={() => logout()}>Logout</button>}
        </nav>
      </header>
      <div className="whiteContainer"></div>
    </>
  );
};

export default Header;
