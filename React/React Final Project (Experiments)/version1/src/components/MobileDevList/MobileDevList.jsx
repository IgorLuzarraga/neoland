import { useState, useEffect } from "react";
import { mobilDev_getAll } from "../../service/mobilDev.service";
import CardMobileDev from "../CardMobileDev/CardMobileDev";
import './MobileDevList.css'

const MobileDevList = () => {
    const [mobileDevList, setMobileDevList] = useState([])

    useEffect(() => {
        mobilDev_getAll()
            .then(mobileDev => setMobileDevList(mobileDev));
    }, []);

    return (
        <>
            {showMobileDevs(mobileDevList)}
        </>
    )
}

const showMobileDevs = (mobileDevList) =>
    <div className='mobileDevsContainer'>
        {mobileDevList.map(showMobileDev)}
    </div>


const showMobileDev = (mobileDev) =>
    <div key={mobileDev._id}>
        <CardMobileDev mobileDev={mobileDev} />
    </div>

export default MobileDevList