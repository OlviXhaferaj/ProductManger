import React, { useState } from 'react';
import axios from 'axios';
import ProductList from '../Components/ProductList';
import ProductForm from '../Components/ProductForm';


const Main = (props) => {
    const [product, setProduct] = useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }
    return (
        <div>
            <ProductForm product={product} setProduct={setProduct}/>
            <hr/>
            <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main