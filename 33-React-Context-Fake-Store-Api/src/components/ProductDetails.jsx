import React, { useContext } from 'react'
import { ProductContextApi } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const productdata = useContext(ProductContextApi);
    const param = useParams();
    console.log(param);

    let selectedProduct = '';

    if(productdata.length>0){
        selectedProduct = productdata.find((elem)=>elem.id == param.id)
    }
    
    console.log(selectedProduct);
    
    
  return (
    <div>
        <img src={selectedProduct.image} alt="" />
        <h4 className="title">{selectedProduct.title}</h4>
        <h3 className="price">{selectedProduct.price}</h3>
        <p className="description">{selectedProduct.description}</p>
    </div>
  )
}

export default ProductDetails