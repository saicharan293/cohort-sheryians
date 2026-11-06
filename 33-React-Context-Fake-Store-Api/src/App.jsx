import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

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
    <div>
      <div className="allProducts">

        {products.map((ele, idx)=>
          <div key={idx} className="product">
            <img src={ele.image} alt="" />
            <h4 className="title">{ele.title}</h4>
            <h3 className="price">{ele.price}</h3>
            <p className="description">{ele.description}</p>
          </div>
        )}
        
      </div>
    </div>
  )

}

export default App