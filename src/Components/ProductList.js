import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                product.map((product, index) => {
                    return(
                        <div key={index}> 
                            <p>Title: {product.title}</p> 
                            <p>Price: {product.price} </p>
                            <p>Description: {product.description}</p>
                            <NavLink to={`/product/${product._id}`}>{product.title}'s Page</NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList