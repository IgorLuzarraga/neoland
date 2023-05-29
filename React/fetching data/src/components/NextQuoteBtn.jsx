import { StateType } from "../types/loadingDataState"

const NextQuoteBtn = ({ state, increment }) =>
    <button
        className="btn btn-primary"
        disabled={state.type === StateType.LOADING}
        onClick={() => increment()}
    >
        NEXT QUOTE
    </button>

export default NextQuoteBtn