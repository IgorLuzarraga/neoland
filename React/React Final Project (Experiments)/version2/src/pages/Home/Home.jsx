import { HomePageData } from "../../components/Home/HomePageData/HomePageData";
import "./Home.css";
import { homePagesData } from '../../data/data.homePagesData'

const Home = () =>
  <div className="outletContainer">
    {showLinksToOtherPages(homePagesData)}
  </div>

const showLinksToOtherPages = (pagesData) =>
  Object.keys(pagesData).map(pageData =>
    <HomePageData pageData={pagesData[pageData]} />
  )

export default Home;
