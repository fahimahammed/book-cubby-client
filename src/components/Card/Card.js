import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const {name, author, price, imageURL, _id} = props.book;
    //console.log(props.book._id)
    return (
        <div className='book-card'>
            <img src={imageURL} alt=""/>
            <h5>{name}</h5>
            <p>{author}</p>
            <div className="book-card-footer">
                <h3>$ {price}</h3>
                <Link to={`/checkout/${_id}`}><button className='btn btn-success'>Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Card;