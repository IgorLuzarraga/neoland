import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/userContext";
import "./Login.css";

const Login = () => {
  const { user, setUser, login } = useContext(UserContext);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("🚀 ~ file: Login.jsx:6 ~ Login ~ user:", user);
  }, [user]);

  return (
    <div className="containerMain">
      <form>
        <h1 className="titleLogin">LOGIN</h1>
        <h4 className="descriptionLogin">
          Please log in to see the web page’s content
        </h4>

        <div className="containerInput">
          <input type="text" name="user" id="user" ref={inputRef} />
          <button
            onClick={(e) => login(inputRef.current.value)}
            className="btnLogin"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
