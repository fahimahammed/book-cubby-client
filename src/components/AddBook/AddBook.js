import React, { useState } from 'react';
import './AddBook.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons'

const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const bookData = {
            name: data.name,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://cherry-shortcake-71638.herokuapp.com/addBook`;
        console.log(bookData);
        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => console.log(res));
        alert('Product added in database..');
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '8eae4c3e3fe826b3eb335a61e319bda4');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='container'>
            <div className="sidebar bg-success">
                <Link to='manageBook'><FontAwesomeIcon icon={faTasks} /> Manage Book</Link>
                <Link to='addBook' className='active'><FontAwesomeIcon icon={faPlus} /> Add Book</Link>
                <Link><FontAwesomeIcon icon={faEdit} /> Edit Book</Link>
            </div>
            <div className="content">
                <h3>Add Book</h3>
                <div className="add-book mt-5">
                   
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex'> 
                            <div className='me-5'>
                                <lebel for='name'>Book Name</lebel> <br/>
                                <input name="name" ref={register} />
                            </div> 
                                <br/>
                            <div className='me-5'>
                                <lebel for='author'>Author Name</lebel> <br/>
                                <input name="author" ref={register({ required: true })} /> 
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='me-5'>
                                <lebel for='price'>Add Price</lebel> <br/>
                                <input name="price" ref={register({ required: true })} /> 
                            </div>
                            <div className='me-5'>
                                <lebel for='image'>Upload Image</lebel> <br/>
                                <input name="image" type='file' onChange={handleImageUpload} /> 
                            </div>
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>} <br/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;