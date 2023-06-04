import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import "./Home.css";

export const Home = () => {
  const { setUser, user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      {user !== null ? (
        <p className="titleHome">Bienvenido {user}</p>
      ) : (
        <>
          <p className="titleHome">
            Please register to access the page
          </p>
          <button className="btn" onClick={() => navigate("/login")}>
            LOGIN
          </button>
        </>
      )}
    </div>
  );
};
