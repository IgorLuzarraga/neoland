import './HomePageData.css'
import { Link } from "react-router-dom";

export const HomePageData = ({ pageData }) =>
    <div className="imgLinkContainer">
        <Link to={pageData.linkTo}>
            <img
                src={pageData.imageSrc}
                alt={pageData.imageAlt}
            />
        </Link>
        <Link to={pageData.linkTo}>
            {pageData.linkText}
        </Link>
    </div>
