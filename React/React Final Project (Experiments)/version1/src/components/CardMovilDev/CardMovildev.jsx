import './CardMovilDev.css'

export const CardMovilDev = ({ movilDev }) =>
    <div className='movilDevInfo'>
        <div className='movilDevData'>
            <p>id: {movilDev._id}</p>
            <p>Brand: {movilDev.brand}</p>
            <p>OS: {movilDev.OS}</p>
            <p>versionOS: {movilDev.versionOS}</p>
            <p>language: {movilDev.language}</p>
            {showMovilDevApps(movilDev.apps)}
        </div>
        {/* <img
            src={movilDev.image}
            alt={`movilDev's ${movilDev.name} pic`}
        /> */}
    </div>

const showMovilDevApps = (apps) =>
    apps.map(showMovilDevApp)

const showMovilDevApp = (app) =>
    <div className='appInfo'>
        <p>app id: {app._id}</p>
        <p>app name: {app.appName}</p>
        <p>app category: {app.category}</p>
        <p>app codeLanguages: {app.codeLanguages}</p>
        <p>app appSize: {app.appSize} Mbytes</p>
    </div>

export default CardMovilDev;