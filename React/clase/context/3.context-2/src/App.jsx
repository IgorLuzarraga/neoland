import "./App.css";
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
