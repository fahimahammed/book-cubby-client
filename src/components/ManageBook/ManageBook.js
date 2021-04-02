import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageBookCard from './ManageBookCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons'

const ManageBook = () => {
    const [bookList, setBookList] = useState([]);
    useEffect(()=>{
        fetch('https://cherry-shortcake-71638.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBookList(data));
    })
    return (
        <div className='container'>
            <div className="sidebar bg-success">
                <Link to='manageBook' className='active'><FontAwesomeIcon icon={faTasks} /> Manage Book</Link>
                <Link to='addBook'><FontAwesomeIcon icon={faPlus} /> Add Book</Link>
                <Link><FontAwesomeIcon icon={faEdit} /> Edit Book</Link>
            </div>
            <div className="content">
                <h3>Manage book</h3> <hr/>
                <div>
                <div className="row text-muted">
                <div className="col">
                    <h5>Product Name</h5>
                </div>
                <div className="col-md">
                    <h5>Author</h5>
                 </div>
                 <div className="col-md">
                    <h5>Price</h5>
                 </div>
                <div className="col col-lg-2">
                    <h5>Action</h5>
                </div>
            </div>
            <hr/>
                    {
                        bookList && bookList.map(book => <ManageBookCard book={book}></ManageBookCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageBook;