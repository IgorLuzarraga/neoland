import './Apps_inMobileDev.css'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { mobileDev_getById } from '../../service/mobileDev.service';
import CardApp_inMobileDev from '../../components/CardApp_inMobileDev/CardApp_inMobileDev';

const Apps_inMobileDev = () => {
    const [mobileDev, setMobileDev] = useState({ apps: [] })
    const { state } = useLocation();
    const { mobileDevId } = state;

    useEffect(() => {
        mobileDev_getById(mobileDevId)
            .then(mobileDev => setMobileDev(mobileDev))
            .catch((error) => {
                console.log('Error fetching data from back end ', error)

                return error;
            });
    }, []);

    return (showApps(mobileDev.apps))
}

const showApps = (apps) =>
    <div className='appsInMobileDev-Container'>
        {apps.map(showApp)}
    </div>

const showApp = (app) =>
    <div key={app._id}>
        <CardApp_inMobileDev app={app} />
    </div>

export default Apps_inMobileDev