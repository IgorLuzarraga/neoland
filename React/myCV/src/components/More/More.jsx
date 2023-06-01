import './More.css'
import Languages from '../Languages/Languages' ///Languages/Languages'
import Habibilities from '../Habilities/Habilities'
import Volunteer from '../Volunteer/Volunteer'

const More = ({ languages, habilities, volunteer }) =>
    <>
        <Languages languages={languages} />
        <Habibilities habilities={habilities} />
        <Volunteer volunteer={volunteer} />
    </>


export default More