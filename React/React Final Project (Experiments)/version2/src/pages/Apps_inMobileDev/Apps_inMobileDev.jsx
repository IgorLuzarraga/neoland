import './Apps_inMobileDev.css'
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { mobileDev_getById } from '../../service/mobileDev.service';
import { pipe } from '../../utils/fp/fpFunctions';
import CardApp_inMobileDev from '../../components/CardApp_inMobileDev/CardApp_inMobileDev';

// console.log('Apps_inMobileDev -> MobileDevId: ', getMobileDevId())

const Apps_inMobileDev = () => {
    const [mobileDev, setMobileDev] = useState(null)
    const [mobileDevId, setMobileDevId] = useState('')
    // const { state } = useLocation();
    // const { id, color } = state;

    // useEffect(() => {
    //     setMobileDevId(getMobileDevId())
    // }, [])

    const mobileid = "647f3390cd5be286b651a18d"

    // useEffect(() => {
    //     mobileDev_getById(id)
    //         .then(mobileDev => setMobileDev(mobileDev))
    //         .catch((error) => {
    //             console.log('Error fetching data from back end ', error)

    //             return error;
    //         });
    // }, []);

    useEffect(() => {
        if (mobileDev === null) {
            console.log("entro")
            mobileDev_getById(mobileid)
                .then(mobileDev => setMobileDev(mobileDev))
                .catch((error) => {
                    console.log('Error fetching data from back end ', error)

                    return error;
                });
        }
    }, [mobileDev]);

    return (
        <>
            {mobileDev !== null && mobileDev.apps.map((app) =>
                <div key={app._id}>
                    <CardApp_inMobileDev app={app} />
                </div>
            )}
            {/* {/div className="outletContainer">
                    {showApps(mobileDev.apps)}
                </div> }
                 */}
        </>

    )

    // return (
    //     <div className="outletContainer">
    //         {showMobileDevById(mobileDev)}
    //     </div>
    // )
}

const showApps = (apps) =>
    <div className='appsInMobileDev-Container'>
        {/* {apps.map(showApp)} */}
    </div>


const showApp = (app) =>
    <div key={app._id}>
        <CardApp_inMobileDev app={app} />
    </div>

// const showMobileDev = () =>
//     pipe(
//         getMobileDevId(),
//         mobileDev_getById,
//         showMobileDevById
//     )

const showMobileDevById = (mobileDev) => {
    console.log('Apps_inMobileDev -> showMobileDevById -> mobileDev: ', mobileDev)
    console.log('Apps_inMobileDev -> showMobileDevById -> mobileDev -> apps: ', mobileDev.apps)
    return showApps(mobileDev.apps)
}

// console.log('showMobileDevById -> mobileDev.brand: ', mobileDev)
// <CardBykId data={character} />


const getMobileDevId = () => useParams().id

export default Apps_inMobileDev