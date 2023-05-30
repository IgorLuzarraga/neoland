import {
    DataState,
    StateDataLoadedType,
    StateErrorLoadingDataType
} from "../types/loadingDataState";

// estas importanciones son gracias al archivo de barril por eso sale en la ruta la carpeta raiz de los archivos
import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from ".";
import ErrorMsg from "./ErrorMsg";
import { NotInitLoading } from "./NotInitLoading";
import NextQuoteBtn from "./NextQuoteBtn";

export const ShowQuotes = () => {
    // We use the useCounter custom hook to select the quote from the 
    // Breaking Bad API
    const { counter, increment } = useCounter(1);

    // Using the custom hook useFetch, we bring the API's data 
    // (Breaking Bad character's quote)
    const dataState = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );

    return (
        <>
            {checkState(dataState)}
            <NextQuoteBtn state={dataState.type} increment={increment} />
        </>
    )
};

const checkState = (dataState: DataState) => {
    switch (dataState.type) {
        case 'NOT_INIT_LOADING_ST':
            return <NotInitLoading />

        case 'LOADING_ST':
            return <LoadingQuote />

        case 'DATA_LOADED_ST':
            return showDataLoaded(dataState)

        case 'ERROR_LOADING_DATA_ST':
            return showDataError(dataState)
    }
}

const showDataLoaded = (dataState: DataState) => {
    let stateDataLoaded = dataState as StateDataLoadedType
    const { author, quote } = stateDataLoaded.payload[0]

    return (<Quote author={author} quote={quote} />)
}

const showDataError = (dataState: DataState) => {
    let stateDataError = dataState as StateErrorLoadingDataType

    return (<ErrorMsg error={stateDataError.payload} />)
}


