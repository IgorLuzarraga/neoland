import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import "./Login2.css";

const Login2 = () => {
  const { user, setUser, login } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log("🚀 ~ file: Login.jsx:6 ~ Login ~ user:", user);
  }, [user]);

  const handleButtonClick = (inputValue) => {
    login(inputValue);
  };

  return (
    <div className="containerMain">
      <form>
        <h1 className="titleLogin">LOGIN</h1>
        <h4 className="descriptionLogin">
          Please log in to see the web page’s content
        </h4>

        <div className="containerInput">
          <input
            type="text"
            name="user"
            id="user"
            onChange={event => setInputValue(event.target.value)}
          />

          <button
            // Method 1
            //onClick={(e) => login(inputValue)}

            // Method 2
            onClick={(e) => handleButtonClick(inputValue)}
            className="btnLogin"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login2;
