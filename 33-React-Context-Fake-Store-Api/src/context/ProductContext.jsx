import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProductContextApi = createContext();

const ProductContext = (props) => {

    const [products, setProducts] = useState([]);

    const getAll = async() => {
        let response = await axios.get('https://fakestoreapi.com/products');
        // console.log(response.data);
        setProducts(response.data);
    }

    useEffect(()=>{
        getAll();
    },[])

    return (
        <ProductContextApi.Provider value={products}>
            {props.children}
        </ProductContextApi.Provider>
    )
}

export default ProductContext