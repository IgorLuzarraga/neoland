import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import "./Home.css";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <main id="homeContainer">
      <h2>You are watching the Home page</h2>
      <h3 className="user-home-container">{user}</h3>
      <input
        type="text"
        name="user"
        id="user"
        onChange={(e) => setUser(e.target.value)}
      />
    </main>
  );
};

export default Home;
