import { useEffect, useState } from "react";
import {
  stateDataLoaded,
  stateErrorLoadingData,
  stateLoading,
  stateNotInitLoading
} from "../types/loadingDataState";

export const useFetch = (url) => {
  const [state, setState] = useState(stateNotInitLoading());

  /// me creo una funcion que me trae los datos
  const getFetch = async () => {
    setState(stateLoading());

    try {
      /// hago la llamada fech
      const resp = await fetch(url);

      // si esta llamada tiene una respuesto no ok entonces creo y lanzo un error
      if (!resp.ok) {
        throw new Error(`HTTP ERROR: status ${resp.status}/ ${resp}`);
      } else {
        // en caso contrario, es decir, la respuesta es ok entonces lo 
        // que hago es que la convierto a json
        const data = await resp.json();

        setState(stateDataLoaded(data))
      }
    } catch (error) {
      setState(stateErrorLoadingData(error.toString()))
    }
  };

  /// el useEffect le pongo en el array de dependencias la url..
  //..para que cuando cambie se desmonte y monte el componete ..
  //..y vuelva a ejecutar el getFetch
  useEffect(() => {
    getFetch();
  }, [url]);

  return (state)
};
