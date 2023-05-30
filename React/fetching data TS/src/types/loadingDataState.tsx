// Loading Data States
export type State
    = 'NOT_INIT_LOADING_ST'
    | 'LOADING_ST'
    | 'DATA_LOADED_ST'
    | 'ERROR_LOADING_DATA_ST'

export type QuoteType = {
    quote: string;
    author: string;
}

export type DataState
    = StateNotInitLoadingType
    | StateLoadingType
    | StateDataLoadedType
    | StateErrorLoadingDataType

export type StateNotInitLoadingType = {
    type: State;
}

export type StateLoadingType = {
    type: State;
}

export type StateDataLoadedType = {
    type: State;
    payload: QuoteType[];
}

export type StateErrorLoadingDataType = {
    type: State;
    payload: string;
}

// State creators (START)

const stateNotInitLoading = (): DataState =>
({
    type: 'NOT_INIT_LOADING_ST',
})

const stateLoading = (): DataState =>
({
    type: 'LOADING_ST'
})

const stateDataLoaded = (data: string): DataState =>
({
    type: 'DATA_LOADED_ST',
    payload: data
})

const stateErrorLoadingData = (error: string): DataState =>
({
    type: 'ERROR_LOADING_DATA_ST',
    payload: error
})

// State creators (END)

export {
    stateDataLoaded,
    stateErrorLoadingData,
    stateLoading,
    stateNotInitLoading
}
