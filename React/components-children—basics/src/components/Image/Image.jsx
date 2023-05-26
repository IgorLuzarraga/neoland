/* eslint-disable react/prop-types */
import './Image.css'

const Image = ({ imgParams }) =>
    <div className='image-container'>
        <img
            src={imgParams.src}
            alt={imgParams.alt}
            width={imgParams.width}
            height={imgParams.height}
        />
    </div>

export default Image