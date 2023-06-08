import { HomePageData } from "../../components/Home/HomePageData/HomePageData";
import "./Home.css";
import { homePagesData } from '../../data/data.homePagesData'
import { json } from "react-router-dom";

const Home = () =>
  <div className="outletContainer">
    {showLinksToOtherPages(homePagesData)}
  </div>

const showLinksToOtherPages = (pagesData) =>
  Object.keys(pagesData).map(pageData =>
    <div key={JSON.stringify(pageData)}>
      <HomePageData pageData={pagesData[pageData]} />
    </div>
  )

export default Home;
