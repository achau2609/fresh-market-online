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
                    <a href="#fruits">Fruits</a>
                    <a href="#vegetables">Vegetables</a>
                    {/* FOR RESGISTERED PAGES TESTING PURPOSES*/}
                    
                </div>
                

            </div>

            <div style={{position: 'relative'}}>
                    <Link to="../404">404 | </Link>
                    <Link to="../">Home | </Link>
                    <Link to="../registered pages/myaccount.js">My Account </Link>
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
                    <a href="#MyAccount">My Account</a>
                    <a href="#MyOrders">My Orders</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;