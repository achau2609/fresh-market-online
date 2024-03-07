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
        <header className='row align-items-center py-2'>
            {/* logo */}
            <div className="col-12 col-sm-2 logo">
                <Link to="/"><img src={logo} alt="Logo" className='ps-4' /></Link>
            </div>

            {/* Search bar */}
            <div className='col-12 col-sm-8'>
                <form onSubmit={handleSearchSubmit} className='d-flex'>
                    <div class="input-group">
                        <input type="search" class="form-control py-2 rounded-0" placeholder="Search for Products" value={searchTerm}
                            onChange={handleSearchChange} />
                        <button class="btn pb-2 rounded-0 border" type="button" id="button-addon2"><FaSearch className="search-icon" /></button>
                    </div>
                </form>
            </div>
            {/* Shopping Cart */}
            <div className='col-12 col-sm-2 shopping-cart-container d-flex justify-content-start'>
                    <Link to="/shoppingCart" className="row text-decoration-none text-dark align-items-center">
                        <div className='col-6'>
                            <button className="btn bg-custom-light p-3 rounded-circle position-relative">
                                <FaShoppingCart />
                                <span class="position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-custom-primary">
                                    {itemCount}
                                </span>
                            </button>
                        </div>
                        <div className='col-6'><span>${totalCost.toFixed(2)}</span></div>
                    </Link>
            </div>
        </header >
    );
};

export default Header;