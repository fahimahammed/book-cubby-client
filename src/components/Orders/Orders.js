import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEnvelope, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import OrderCard from './OrderCard';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderHistory, setOrderHistory] = useState();
    const url = `https://cherry-shortcake-71638.herokuapp.com/orders/${loggedInUser.email}`;
    //console.log(url);
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setOrderHistory(data));
    }, []);
    //console.log(orderHistory);
    
    return (
        <div className='container'>
            <div className="bg-light border-bottom mb-3 mt-3 p-3">
                <h4><FontAwesomeIcon icon={faBook} /> Your Order(s)</h4>
                <p><FontAwesomeIcon icon={faEnvelope} /> {loggedInUser.email}</p>
            </div>
            <div className="row p-2 mt-3 bg-success text-white">
                <div className="col">
                    <h5>Product Name</h5>
                </div>
                <div className="col-md">
                    <h5>Price</h5>
                 </div>
                 <div className="col-md">
                    <h5>Quantity</h5>
                 </div>
                <div className="col col-lg-2">
                    <h5>Order Time</h5>
                </div>
            </div>
            <br/>
            {
                orderHistory && orderHistory.map(order => <OrderCard order={order}></OrderCard>)
            }
            <hr/>
        </div>
    );
};

export default Orders;