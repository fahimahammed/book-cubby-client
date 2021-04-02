import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect( () => {
        fetch('https://cherry-shortcake-71638.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    //console.log(books.length);
    return (
        <div className='container'>
            <div className="input-group search-container pt-4">
             <input className='search-input p-1 bg-light'type="text" name="input" id="" placeholder='Search Book'/>
             <button className="btn btn-success search-btn" type="button"> Search </button>
            </div>
            {
                !books.length && <div className="d-flex justify-content-center pt-5">
                                    <div className="spinner-border text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
            }
            <div  className='card-style pt-5'>
            {
                books.map(book => <Card book={book} key={book._id}></Card>)
            }
            </div>
        </div>
    );
};

export default Home;