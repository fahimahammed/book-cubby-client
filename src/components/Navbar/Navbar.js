import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand">BOOK CUBBY</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/home' className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/orders' className="nav-link">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin' className="nav-link">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/deals' className="nav-link" href="#">Deals</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    loggedInUser.email ? <img className=' user-img' src={loggedInUser.photoURL} alt=""/> : <Link to='/login'><button className='btn btn-success'>Login</button></Link>
                                }
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
    );
};

export default Navbar;