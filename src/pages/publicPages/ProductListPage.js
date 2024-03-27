import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import TwoThumbs from '../../component/Staff/Helpers/RangeSlider/RangeSlider';
import ProductList from '../../component/ProductList';

const ProductListPage = () => {

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

    return (
        <div className='container public'>
            <div className='row public'>
                {/* Search */}
                <div className='col-12 col-md-3 border-end pe-4'>
                    <div className="card border-0">
                        <div className='row card-header text-start'>
                            <h5 class="col-10 ">Search</h5>
                        </div>
                        <div claclassNames="card-body">
                            <div className='card-text py-3'>
                                <form className='container text-start'>
                                    <div className='row mb-3'>
                                        <div className='col-12'>
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
                                    <div className='row justify-content-between'>
                                        <div className='col-12'>
                                            <label htmlFor='price-range'>Price</label>
                                            <TwoThumbs STEP={0.01} MIN={0} MAX={50} values={searchPrices} setValues={setSearchPrices} dp={2} />
                                        </div>
                                        <div className='col-12 d-grid gap-2'>
                                            <button type='button' className='btn btn-custom-primary'>Search</button>
                                            <button type='button' className='btn btn-light'>Clear</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Table */}
                <div className='col-12 col-md-9'>
                    <ProductList />
                </div>
            </div>
        </div>
    )

}

export default ProductListPage