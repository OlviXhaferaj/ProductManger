import React, { useState } from 'react';
import axios from 'axios';
import ProductList from '../Components/ProductList';
import ProductForm from '../Components/ProductForm';


const Main = (props) => {
    const [product, setProduct] = useState([]);
    return (
        <div>
            <ProductForm product={product} setProduct={setProduct}/>
            <hr/>
            <ProductList product={product} setProduct={setProduct}/>
        </div>
    )
}

export default Main