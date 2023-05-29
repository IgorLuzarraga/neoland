// Loading Data States
const StateType = {
    NOT_INIT_LOADING: "NOT_INIT_LOADING",
    LOADING: "LOADING",
    DATA_LOADED: "DATA_LOADED",
    ERROR_LOADING_DATA: "ERROR_LOADING_DATA"
}

// State creators (START)

const stateNotInitLoading = () =>
({
    type: StateType.NOT_INIT_LOADING
})

const stateLoading = () =>
({
    type: StateType.LOADING
})

const stateDataLoaded = (data) =>
({
    type: StateType.DATA_LOADED,
    payload: data
})

const stateErrorLoadingData = (error) =>
({
    type: StateType.ERROR_LOADING_DATA,
    payload: error
})

// State creators (END)

export {
    StateType,
    stateDataLoaded,
    stateErrorLoadingData,
    stateLoading,
    stateNotInitLoading
}