import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className='container text-center text-danger mt-5 pt-5'>
            <h1>404 Error!</h1>
            <h1>Page not found</h1>
            <Link to='/home'><button className='btn btn-success mt-5'>Go to Home page</button></Link>
        </div>
    );
};

export default NoMatch;