import './CardMobileDev.css'
import { useNavigate } from "react-router-dom";
//import AppList_inMobileDev from '../AppList_inMobileDev/AppList_inMobileDev';

export const CardMobileDev = ({ mobileDev }) => {
    const navigate = useNavigate();
    const pathById = `/mobileDev/apps`;

    return (
        <div className='mobileDev-Info'>
            <img
                src={mobileDev.image}
                alt={`mobileDev's ${mobileDev.brand} pic`}
            />
            {/* <p>id: {mobileDev._id}</p> */}
            <p>Brand: {mobileDev.brand}</p>
            <p>OS: {mobileDev.OS}</p>
            <p>versionOS: {mobileDev.versionOS}</p>
            <p>language: {mobileDev.language}</p>
            <p>description: {mobileDev.description}</p>

            <button
                onClick={
                    () => navigate(pathById, { state: { mobileDevId: mobileDev._id, color: 'blue' } })
                }
            >
                Show Apps!
            </button>
        </div>
    )
}

export default CardMobileDev;