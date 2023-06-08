import './AppList_inMobileDev.css'
import CardApp_inMobileDev from '../CardApp_inMobileDev/CardApp_inMobileDev'

const AppList_inMobileDev = ({ appList }) => {
    console.log('AppList_inMobileDev -> kaixo')
    return (
        <>
            {showApps(appList)}
        </>
    )
}

const showApps = (appList) =>
    <div className='AppListInMobileDev-container'>
        {appList.map(showApp)}
    </div>

const showApp = (app) =>
    <div key={app._id}>
        <CardApp_inMobileDev app={app} />
    </div>

export default AppList_inMobileDev