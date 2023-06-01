import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import "./Home.css";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <main id="homeContainer" className="containerMain">
      <h1>You're on the Home page</h1>
      <h2>{user}</h2>
    </main>
  );
};

export default Home;
