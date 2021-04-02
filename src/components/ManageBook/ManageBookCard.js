import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faPlus, faTasks, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageBookCard = (props) => {
    const {name, price, author, _id} = props.book;
    const deleteProduct = id =>{
        fetch(`https://cherry-shortcake-71638.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
    }
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h6>{name}</h6>
                </div>
                <div className="col-md">
                    <h6>{author}</h6>
                 </div>
                 <div className="col-md">
                    <h6>$ {price}</h6>
                 </div>
                <div className="col col-lg-2">
                    <button className='btn btn-warning me-1'> <FontAwesomeIcon icon={faEdit} /> </button>
                    <button onClick={()=>deleteProduct(_id)} className='btn btn-danger'> <FontAwesomeIcon icon={faTrashAlt} /> </button>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default ManageBookCard;