import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/'+id, {
            title:title,
            price:price,
            description:description
        })
        .then(res => {
            console.log(res);
            navigate("/home")
        })
        .catch(err => console.log(err))
        
    } 
    
    return (
        <div>
            <form onSubmit={updateProduct}>
                <label className="sr-only">Title</label>
                <input  className="form-control mx-sm-3" type={'text'} name="title" value={title} onChange={(e) => setTitle(e.target.value)  }/><br/>
                
                <label className="sr-only">Price</label>
                <input className="form-control mx-sm-3"  type={'number'} name="price" value={price} onChange={(e) => setPrice(e.target.value)  }/><br/>
                <label className="sr-only">Description</label>
                <input className="form-control mx-sm-3"  type={'text'} name="description" value={description} onChange={(e) => setDescription(e.target.value)  }/><br/>
                <input className="btn btn-primary" type={'submit'} value={'SUBMIT'}/>
            </form>
        </div>
    )
}

export default Update