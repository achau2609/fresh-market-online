import React from 'react'
import CartSummary from '../../component/CartSummary'
import ShoppingCartItem from '../../component/ShoppingCartItem'

const ShoppingCart = () => {

    const products = [
        {
            "ProductName": "Organic Apples",
            "ProductDescription": "Organic Fresh Apples (Bag 2lb)",
            "ProductPrice": 5.99,
            "Quantity": 2,
            "Picture": "https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png"
        },
        {
            "ProductName": "Organic Spinach",
            "ProductDescription": "Fresh Organic Baby Spinach Leaves (100g)",
            "ProductPrice": 3.49,
            "Quantity": 1,
            "Picture": "https://www.earthboundfarm.com/wp-content/uploads/2019/06/baby-spinach-5oz.png"
        }
    ]

    return (
        <div className='container public'>
            <div className='row'>
                <div className='col-12 col-md-8'>
                    <div className='fs-4'>My Cart ({products.length} Items)</div>
                    <hr />
                    <div className='row'>
                        <div className='col-auto mx-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>
                        </div>
                        <div className='col-auto ps-0'>
                            <div class="btn-group" role="group">
                                <input type="radio" class="btn-check" name="btnradio" id="delivery-btn" autocomplete="off" />
                                <label class="btn btn-outline-success" for="delivery-btn">Delivery</label>

                                <input type="radio" class="btn-check" name="btnradio" id="pickup-btn" autocomplete="off" />
                                <label class="btn btn-outline-success" for="pickup-btn">Pickup</label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {products.map((product) =>
                        <ShoppingCartItem product={product} />)}
                    <hr />
                    <div className='row justify-content-end'>
                        <button className='col-12 col-md-auto btn btn-outline-secondary'>Empty Cart</button>
                    </div>
                </div>

                <div className='col-12 col-md-4'>
                    <CartSummary />
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart