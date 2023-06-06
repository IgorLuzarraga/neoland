import './CardMobileDev.css'
import AppList_inMobileDev from '../AppList_inMobileDev/AppList_inMobileDev';

export const CardMobileDev = ({ mobileDev }) =>
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
        {/* {showMovilDevApps(mobileDev.apps)} */}
        {/* <button
            onClick={handleClick}
        > */}
        <button
            onClick={
                () => <AppList_inMobileDev apps={mobileDev.apps} />
            }
        >
            Show Apps!
        </button>
    </div>

const handleClick = () => {
    console.log('Button clicked!');
    return <AppList_inMobileDev apps={mobileDev.apps} />
}




// const showMovilDevApps = (apps) =>
//     apps.map(showMovilDevApp)

// const showMovilDevApp = (app) =>
//     <div className='appInfo'>
//         <p>app id: {app._id}</p>
//         <p>app name: {app.appName}</p>
//         <p>app category: {app.category}</p>
//         <p>app codeLanguages: {app.codeLanguages}</p>
//         <p>app appSize: {app.appSize} Mbytes</p>
//     </div>

export default CardMobileDev;