import React from 'react';
import { Link } from 'react-router-dom';

const MyAccountNavBar = () => {

    return (
        <div className='myacc-navbar'>
                <span className='myacc-navbar-btn'><Link to="/myaccount/orderhistory" style={{ textDecoration: 'none', color: "black"}}>My Orders</Link></span>
                <span className='myacc-navbar-btn'><Link to="/myaccount" style={{ textDecoration: 'none', color: "black"}}>My Account</Link></span>
        </div>
    )

}

export default MyAccountNavBar


