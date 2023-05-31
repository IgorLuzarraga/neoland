import axios from 'axios';

//Almacenamos en una constante la URL de la NASA
const NASA_URL = import.meta.env.VITE_NASA_URL

//Almacenamos en una constante nuestra API Key, esto es recomendable almacenarlo en una variable de entorno
const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY

export const getApod = async (date) => {
    const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
    );

    return data
};