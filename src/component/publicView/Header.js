import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { logo } from "../../image";
import { Link } from 'react-router-dom';

const Header = () => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };


    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    const itemCount = 3; // This should be dynamic based on cart contents
    const totalCost = 15.00; // This should be dynamic based on cart contents

    return (
        <header>
            {/* logo */}
            <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>

            {/* Search bar */}
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="search"
                    className="search-input"
                    placeholder="Search for Products"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">
                    <FaSearch className="search-icon" />
                </button>
            </form>

            {/* Shopping Cart */}
            <div >
                <Link to="/shoppingCart" className="shopping-cart-container">
                    <div className="header-icons"> 
                        <FaShoppingCart />
                    </div>
                    <span className="cart-total-cost">${totalCost.toFixed(2)}</span>
                    <span className="cart-item-count">{itemCount}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;