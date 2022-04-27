import axios from "axios";

export const ioasysApi = axios.create({
    baseURL: 'https://books.ioasys.com.br/api/v1',
    headers:{
        Accept: 'application/json',
        'content-type': 'application/json'
    }
})