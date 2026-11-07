import axios from 'axios'

export const getAll = async() => {
    let response = await axios.get('https://fakestoreapi.com/products');
    // console.log(response.data);
    return response.data;
}