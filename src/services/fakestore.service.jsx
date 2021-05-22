import _axios from 'axios';
import 'symbol-observable';

const axios = _axios.create({
    baseURL: "https://fakestoreapi.com/",
    responseType: "json"
});

const GET = (url) => {
    return axios.get(url).then(response => response.data);    
}

export { GET };