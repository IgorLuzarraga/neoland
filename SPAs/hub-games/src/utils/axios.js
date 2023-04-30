import axios from "axios";

export const axiosRequest = async (options) =>
    await axios
        .request(options)
        .then(res => res.data)
        .catch(error => console.log(error))