import './Volunteer.css'

const Volunteer = ({ volunteer }) =>
    <div className="volunteer-card">
        <h3>Volunteer Experience</h3>
        {showVolunteerExperience(volunteer)}
    </div>

const showVolunteerExperience = (volunteer) =>
    volunteer.map((item) => (
        <div key={JSON.stringify(item)}>
            <p className="name">{item.name}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
        </div>
    ))

export default Volunteer

