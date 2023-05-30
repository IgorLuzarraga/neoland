import { StateType } from "../types/loadingDataState"

type props = {
    state: StateType,
    increment: () => void;
}

const NextQuoteBtn = ({ state, increment }: props) =>
    <button
        className="btn btn-primary"
        disabled={state.type === StateType.LOADING}
        onClick={() => increment()}
    >
        NEXT QUOTE
    </button>

export default NextQuoteBtn