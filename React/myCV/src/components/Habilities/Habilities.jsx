import './Habilities.css'

const Habilities = ({ habilities }) => {
    return (
        <div>
            <div className="habilities-card">
                {habilities.map((hability) =>
                    <p key={JSON.stringify(hability)}>{hability}</p>
                )}
            </div>
        </div>
    );
};

export default Habilities