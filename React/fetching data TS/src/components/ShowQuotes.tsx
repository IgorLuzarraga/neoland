import {
    DataState,
    QuoteType,
    StateNotInitLoadingType,
    StateDataLoadedType,
    StateErrorLoadingDataType
} from "../types/loadingDataState";

// estas importanciones son gracias al archivo de barril por eso sale en la ruta la carpeta raiz de los archivos
import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from ".";
import ErrorMsg from "./ErrorMsg";
import { NotInitLoading } from "./NotInitLoading";
import NextQuoteBtn from "./NextQuoteBtn";

// type StateProps = {
//     state: State
// }

export const ShowQuotes = () => {
    // vamos a utlizar el customHook que ya conocemos el useCounter y se trae el incremento y estado y le da de valor incial 1
    const { counter, increment } = useCounter(1);

    // utlizamos el customHook del fetch y nos traemos la data, el esta cargando y el si tenemos un error
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
    switch (dataState) {
        case StateNotInitLoadingType:
            return <NotInitLoading />

        case 'LOADING_ST':
            return <LoadingQuote />

        case 'DATA_LOADED_ST':
            return showDataLoaded(dataState)

        case 'ERROR_LOADING_DATA_ST':
            return <ErrorMsg error={dataState} />
    }
}

const showDataLoaded = (dataState: StateDataLoadedType) => {
    const { author, quote } = dataState.payload[0]

    return (<Quote author={author} quote={quote} />)
}

// const showDataLoaded = (payload: QuoteType[]) => {
//     const { author, quote } = payload[0]

//     return (<Quote author={author} quote={quote} />)
// }

