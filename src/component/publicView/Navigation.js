import React, { useState } from 'react';
import { FaBars, FaArrowDown, FaUser, FaAngleDown } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [showCategories, setShowCategories] = useState(false);
    
    return (
        <nav className="navigation">
            {/* Category Menu */}
            <div className="categories-dropdown"
                 onMouseEnter={() => setShowCategories(true)}
                 onMouseLeave={() => setShowCategories(false)}>
                <button className="categories-dropbtn">
                    {showCategories ? <FaArrowDown /> : <FaBars />} 
                    Categories
                </button>
                <div className={`categories-dropdown-content ${showCategories ? 'visible' : 'hidden'}`}>
                    {/* Dynamically render categories here */}
                    {/* Sample categories below*/}
                    <Link to="/productlist">Fruits</Link>
                    <Link to="/productlist">Vegetables</Link>
                    
                    
                </div>
                

            </div>

            {/* Account Menu */}
            <div className="account-dropdown">
                <button className="account-dropbtn">
                   My Account <FaAngleDown />
                </button>
                <div className="account-dropdown-content">
                    <div className="user-icon">
                        <FaUser /> 
                    </div>
                    <Link to="/myaccount">My Account</Link>
                    <Link to="/myaccount/orderhistory">My Orders</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;