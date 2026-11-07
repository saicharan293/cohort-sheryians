import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getAll } from '../api/ProductApi';

export const ProductContextApi = createContext();

const ProductContext = (props) => {

    const [products, setProducts] = useState([]);

    const setData = async() => {
        setProducts(await getAll());
    }

    useEffect(()=>{
        setData();
    },[])

    return (
        <ProductContextApi.Provider value={products}>
            {props.children}
        </ProductContextApi.Provider>
    )
}

export default ProductContext