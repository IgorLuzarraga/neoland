import './Score.css'

const Score = ({ score, setScore }) =>
    <>
        <label>Change your score:</label>
        <br />
        <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.valueAsNumber)}
        />
    </>

export default Score