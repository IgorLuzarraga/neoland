/* eslint-disable react/prop-types */
import './Image.css'

const Image = ({imgParams}) =>
    <img 
        src={imgParams.src} 
        alt={imgParams.alt} 
        width={imgParams.width}
        height={imgParams.height}
    />
   
export default Image