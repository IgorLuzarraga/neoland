import { useState, useEffect } from "react";
import { mobilDev_getAll } from "../../service/mobilDev.service";
import CardMovilDev from "../CardMovilDev/CardMovildev";
import './MovilDevList.css'

const MovilDevList = () => {
    const [movilDevList, setMovilDevList] = useState([])

    useEffect(() => {
        mobilDev_getAll()
            .then(movilDev => setMovilDevList(movilDev));
    }, []);

    return (
        <>
            {showMovilDevs(movilDevList)}
        </>
    )
}

const showMovilDevs = (movilDevList) => {
    console.log('showMovilDevs -> movilDevList: ', movilDevList)

    return (
        <div className='movilDevsContainer'>
            {movilDevList.map(showMovilDev)}
        </div>
    )
}

const showMovilDev = (movilDev) =>
    <CardMovilDev key={movilDev.id} movilDev={movilDev} />

export default MovilDevList