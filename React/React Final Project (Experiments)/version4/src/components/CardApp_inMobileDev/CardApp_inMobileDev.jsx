import './CardApp_inMobileDev.css'

export const CardApp_inMobileDev = ({ app }) =>
    <div className='cardAppInMobileDev-Data'>
        <img
            src={app.image}
            alt={`app's ${app.appName} pic`}
        />
        {showAppInfo(app)}
    </div>

const showAppInfo = (app) => {
    console.log('showAppInfo -> app: ', app)
    return (
        <div className='cardAppInMobileDev-Info'>
            {/* <p>app id: {app._id}</p> */}
            <p>app name: {app.appName}</p>
            <p>app category: {app.category}</p>
            <p>app codeLanguages: {app.codeLanguages}</p>
            <p>app appSize: {app.appSize} Mbytes</p>
            <p>description: {app.description}</p>
        </div>
    )
}

export default CardApp_inMobileDev;