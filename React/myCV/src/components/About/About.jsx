import './About.css'

const About = ({ hero }) => {
    return (
        <div className="about">
            <div className='about-card'>
                {showAboutMe(hero.aboutMe)}
            </div>
        </div>
    )
}

const showAboutMe = (aboutMeArr) =>
    aboutMeArr.map(aboutMe =>
        <div key={JSON.stringify(aboutMe)}>
            <p>{aboutMe.info}</p>
        </div>
    )

export default About