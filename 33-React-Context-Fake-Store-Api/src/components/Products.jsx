import React, { useContext } from 'react'
import { ProductContextApi } from '../context/ProductContext'
import { Link } from 'react-router-dom';


const Products = () => {
    const products = useContext(ProductContextApi);
    return (
        <div className="allProducts">

            {products.map((ele, idx)=>
                <Link key={idx} className="product" to={`/products/${ele.id}`}>
                    <img src={ele.image} alt="" />
                    <h4 className="title">{ele.title}</h4>
                    <h3 className="price">{ele.price}</h3>
                    <p className="description">{ele.description}</p>
                </Link>
            )}
            
        </div>
    )
}

export default Products