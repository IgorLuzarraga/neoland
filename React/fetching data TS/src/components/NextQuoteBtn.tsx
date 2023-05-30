import { State } from "../types/loadingDataState"

type props = {
    state: State,
    increment: () => void;
}

const NextQuoteBtn = ({ state, increment }: props) =>
    <button
        className="btn btn-primary"
        disabled={state === 'LOADING_ST'}
        onClick={() => increment()}
    >
        NEXT QUOTE
    </button>

export default NextQuoteBtn