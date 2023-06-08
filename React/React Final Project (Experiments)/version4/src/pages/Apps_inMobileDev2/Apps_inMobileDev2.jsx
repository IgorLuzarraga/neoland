import { useState, useEffect } from "react";
import { mobileDev_getAll } from "../../service/mobileDev.service";
import CardMobileDev from "../../components/CardMobileDev/CardMobileDev";
import './Apps_inMobileDev2.css'

const Apps_inMobileDev2 = () => {
    const [mobileDevList, setMobileDevList] = useState([])

    useEffect(() => {
        mobileDev_getAll()
            .then(mobileDev => setMobileDevList(mobileDev))
            .catch((error) => {
                console.log('Error fetching data from back end ', error)

                return error;
            });
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

export default Apps_inMobileDev2