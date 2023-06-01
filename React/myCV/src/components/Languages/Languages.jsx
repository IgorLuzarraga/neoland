import './Languages.css'

const Languages = ({ languages }) =>
    <div className='language-card'>
        <p>language: {languages.language}</p>
        <p>wrlevel: {languages.wrlevel}</p>
        <p>splevel: {languages.splevel}</p>
    </div>

export default Languages