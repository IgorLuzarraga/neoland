import { StateType } from "../types/loadingDataState";

// estas importanciones son gracias al archivo de barril por eso sale en la ruta la carpeta raiz de los archivos
import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from ".";
import ErrorMsg from "./ErrorMsg";
import { NotInitLoading } from "./NotInitLoading";
import NextQuoteBtn from "./NextQuoteBtn";

export const ShowQuotes = () => {
  // vamos a utlizar el customHook que ya conocemos el useCounter y se trae el incremento y estado y le da de valor incial 1
  const { counter, increment } = useCounter(1);

  // utlizamos el customHook del fetch y nos traemos la data, el esta cargando y el si tenemos un error
  const state = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <>
      {checkState(state)}
      <NextQuoteBtn state={state} increment={increment} />
    </>
  )
};

const checkState = (state) => {
  switch (state.type) {
    case StateType.NOT_INIT_LOADING:
      return <NotInitLoading />

    case StateType.LOADING:
      return <LoadingQuote />

    case StateType.DATA_LOADED:
      return showDataLoaded(state.payload)

    case StateType.ERROR_LOADING_DATA:
      return <ErrorMsg error={state.payload} />
  }
}

const showDataLoaded = (payload) => {
  const { author, quote } = payload[0]

  return (<Quote author={author} quote={quote} />)
}

