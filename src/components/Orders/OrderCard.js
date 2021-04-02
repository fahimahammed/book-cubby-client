import React from 'react';

const OrderCard = (props) => {
    const {productName, price, quantity, orderTime} = props.order;
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h6>{productName}</h6>
                </div>
                <div className="col-md">
                    <h6>$ {price}</h6>
                 </div>
                 <div className="col-md">
                    <h6>{quantity}</h6>
                 </div>
                <div className="col col-lg-2">
                    <h6>{orderTime}</h6>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;