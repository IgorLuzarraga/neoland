import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="outletContainer homeContainer">
      <div className="containerImgLink">
        <Link to="/gallery">
          <img
            src="https://thumbs.dreamstime.com/b/understanding-art-exhibition-opening-people-gallery-talking-colorful-paintings-displayed-walls-33933267.jpg"
            alt="link to gallery page"
          />
        </Link>
        <Link to="/gallery" className="ancorGallery">
          GALLERY
        </Link>
        <Link to="/about"></Link>
      </div>
      <div className="containerImgLink">
        <Link to="/about">
          <img
            src="https://play-lh.googleusercontent.com/cubIK4wSiJ0PUZ1J28kGQYxJYGp5mT1QMV-_vIZP_hJXiRcMLV3fXDQUDnGikMxLxw"
            alt="link to about page"
          />
        </Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </div>
  );
};

export default Home;
