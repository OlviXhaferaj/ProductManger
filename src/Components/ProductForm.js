import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Form} from 'react-bootstrap'; 

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title:title,
            price:price,
            description:description
        })
        .then(res=> {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <label className="sr-only">Title</label>
                <input  className="form-control mx-sm-3" type={'text'} onChange={(e) => setTitle(e.target.value)  }/><br/>
                
                <label className="sr-only">Price</label>
                <input className="form-control mx-sm-3"  type={'number'} onChange={(e) => setPrice(e.target.value)  }/><br/>
                <label className="sr-only">Description</label>
                <input className="form-control mx-sm-3"  type={'text'} onChange={(e) => setDescription(e.target.value)  }/><br/>
                <input className="btn btn-primary" type={'submit'} value={'SUBMIT'}/>
            </form>
        </div>
    )
}

export default ProductForm