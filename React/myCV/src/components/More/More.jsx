import './More.css'
import Languages from '../Languages/Languages' ///Languages/Languages'
import Habibilities from '../Habilities/Habilities'
import Volunteer from '../Volunteer/Volunteer'

const More = ({ languages, habilities, volunteer }) =>
    <>
        {showHorizontalLine('Languages')}
        <Languages languages={languages} />

        {showHorizontalLine('Habilities')}
        <Habibilities habilities={habilities} />

        {showHorizontalLine('Volunteer')}
        <Volunteer volunteer={volunteer} />
    </>


const showHorizontalLine = (text) =>
    <div className='horizontal-line-container'>
        <hr className='horizontal-line'></hr>
        {text}
        <hr className='horizontal-line'></hr>
    </div>

export default More