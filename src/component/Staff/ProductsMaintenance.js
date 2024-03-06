import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import TwoThumbs from './Helpers/RangeSlider/RangeSlider';
import ProductList from '../ProductList';

const Products = () => {
    const categories = [
        {
            cat: 'Meat',
            key: 'Meat'
        },
        {
            cat: 'Dairy & Eggs',
            key: 'Dairy & Eggs'
        }, {
            cat: 'Pantry',
            key: 'Rice'
        }, {
            cat: 'Pantry',
            key: 'Baking'
        }, {
            cat: 'Fruits & Vegetables',
            key: 'Herbs'
        }, {
            cat: 'Fruits & Vegetables',
            key: 'Fresh Vegetables'
        },
    ]

    const [searchPrices, setSearchPrices] = useState([0, 50])
    const [searchInventory, setSearchInventory] = useState([0, 100])

    return (
        <div>
            {/* Search */}
            <div className='container mb-2'>
                <div className="card border-0">
                    <div className='row card-header text-start'>
                        <h5 class="col-10 ">Search</h5>
                        <div className='col-2'>
                            <Link to="/staff/products/0001"><button type='button' className='btn btn-success'>Add Product</button></Link>
                        </div>
                    </div>
                    <div claclassNames="card-body">
                        <div className='card-text py-3'>
                            <form className='container text-start'>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <label htmlFor='product-name'>Product Name</label>
                                        <input id='product-name' type='text' className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor='order-status'>Category</label>
                                        <Multiselect
                                            displayValue="key"
                                            groupBy="cat"
                                            hideSelectedList
                                            onKeyPressFn={function noRefCheck() { }}
                                            onRemove={function noRefCheck() { }}
                                            onSearch={function noRefCheck() { }}
                                            onSelect={function noRefCheck() { }}
                                            options={categories}
                                            showCheckbox
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <label htmlFor='price-range'>Price Range</label>
                                        <TwoThumbs STEP={0.01} MIN={0} MAX={50} values={searchPrices} setValues={setSearchPrices} dp={2} />
                                    </div>
                                    <div className='col-6'>
                                        <label htmlFor='inventory-level'>Inventory Level</label>
                                        <TwoThumbs STEP={1} MIN={0} MAX={100} values={searchInventory} setValues={setSearchInventory} dp={0} />
                                    </div>
                                </div>
                                <div className='row justify-content-between'>
                                    <div className='col-3'>
                                        <button type='button' className='btn btn-success me-3'>Search</button>
                                        <button type='button' className='btn btn-light'>Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div>  
                <ProductList />
            </div>   
        </div>
    )
}

export default Products