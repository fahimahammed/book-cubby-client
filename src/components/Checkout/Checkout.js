import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {
    const { bookId } = useParams();
    const [checkBook, setCheckBook] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://cherry-shortcake-71638.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setCheckBook(data));
    }, [])
    const clickedProduct = checkBook.filter(product => product._id === bookId);
    console.log(clickedProduct[0]);
    const { name, price } = clickedProduct[0] || {};
    const {displayName, email} = loggedInUser;
    const orderdDetail = {name: displayName , email: email, productName: name, price: price, quantity: 1, orderTime: new Date()};
    console.log(orderdDetail);
    const handleOrder = () =>{
            fetch('https://cherry-shortcake-71638.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(orderdDetail)
        })
        .then(res => res.json())
        .then(data =>console.log(data));
        alert('Order placed successfully. Thank You.');
    }
    return (
        <div className='container p-5 mt-4 checkout-container'>
            <h3>Checkout</h3>
            <div className='checkout-detail p-4 mt-3'>
            <div className="row pt-5 text-muted">
                <div className="col">
                    <h5>Description</h5>
                </div>
                <div className="col-md">
                    <h5>Quantity</h5>
                 </div>
                <div className="col col-lg-2">
                    <h5>Price</h5>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col">
                    <h5>{name}</h5>
                </div>
                <div className="col-md">
                    <h5>  1</h5>
                 </div>
                <div className="col col-lg-2">
                    <h5>$ {price}</h5>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col">
                    <h5>Total</h5>
                </div>
                <div className="col-md"> </div>
                <div className="col col-lg-2">
                    <h5>$ {price}</h5>
                    <button onClick={()=>handleOrder()} className='btn btn-success mt-5'>Checkout</button>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Checkout;