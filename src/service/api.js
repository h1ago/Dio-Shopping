import axios from "axios";

const url = 'http://localhost:5000/';

export function productsApi(){
    return axios.get(url+'product')
        .then( response => response.data )
}

export function categoryApi(){
    return axios.get(url+'category')
        .then( response => response.data )
}