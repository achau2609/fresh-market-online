import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {

    const products = [
        {
            "ProductName": "Organic Apples",
            "ProductDescription": "Organic Fresh Apples (Bag 2lb)",
            "ProductPrice": 5.99,
            "Quantity": 150,
            "Picture": "https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png"
        },
        {
            "ProductName": "Organic Spinach",
            "ProductDescription": "Fresh Organic Baby Spinach Leaves (100g)",
            "ProductPrice": 3.49,
            "Quantity": 100,
            "Picture": "https://www.earthboundfarm.com/wp-content/uploads/2019/06/baby-spinach-5oz.png"
        },
        {
            "ProductName": "Grass-fed Beef",
            "ProductDescription": "Premium quality grass-fed beef.",
            "ProductPrice": 12.99,
            "Quantity": 50,
            "Picture": "https://s3.amazonaws.com/grazecart/meetingplaceorganicfarm/images/1667582988_63654c0c95d6e.jpg"
        }, {
            "ProductName": "Whole Grain Bread",
            "ProductDescription": "Nutritious whole grain bread loaf.",
            "ProductPrice": 3.49,
            "Quantity": 120,
            "Picture": "https://assets.shop.loblaws.ca/products/21178642/b2/en/front/21178642_front_a06_@2.png"
        },
        {
            "ProductName": "Free-range Eggs",
            "ProductDescription": "Free-range eggs from local farms.",
            "ProductPrice": 3.99,
            "Quantity": 80,
            "Picture": "https://grayridge.com/conestogafarms/wp-content/uploads/2017/01/freerangeedit.jpg"
        },
        {
            "ProductName": "Caesar Salad Mix",
            "ProductDescription": "Pre-packaged mix for a classic Caesar salad.",
            "ProductPrice": 5.49,
            "Quantity": 40,
            "Url": "example.com/products/caesar-salad",
            "CategoryId": "Packaged Salads",
            "Picture": "https://www.freshexpress.com/wp-content/uploads/2021/09/FEX_KIT_Caesar_Bag_278g_9.8oz_88481_CAN_FRONT.png.webp"
        }, {
            "ProductName": "Organic Kale",
            "ProductDescription": "Fresh and Nutritious Organic Baby Kale Leaves (142g)",
            "ProductPrice": 3.99,
            "Quantity": 80,
            "Picture": "https://assets.shop.loblaws.ca/products/21004291/b2/en/front/21004291_front_a06_@2.png"
        },
        {
            "ProductName": "Ripe Bananas",
            "ProductDescription": "Sweet and ripe bananas for a healthy snack.",
            "ProductPrice": 1.99,
            "Quantity": 120,
            "Picture": "https://www.superhealthykids.com/wp-content/uploads/2022/04/ripe-bananas.jpg"
        },
        {
            "ProductName": "Mixed Dried Fruits & Nuts",
            "ProductDescription": "Assorted dried fruits and nuts mix for snacking.",
            "ProductPrice": 7.99,
            "Quantity": 100,
            "Picture": "https://product-images.metro.ca/images/h62/h38/9131793711134.jpg"
        },
    ]

    return (
        <div className="container text-center">
            {/* Sort by */}
            <div class="row justify-content-end mb-4 align-items-center">
                <div class="col-12 col-md-auto">
                    <label htmlFor='price-range'>Sort by:</label>
                </div>
                <div class="col-12 col-md-auto">
                    <select class="form-select" id="order-status">
                        <option selected>Price (Low to High)</option>
                        <option value="1">Price (High to Low)</option>
                        <option value="2">A-Z</option>
                        <option value="3">Newest to Oldest</option>
                    </select>
                </div>
            </div>
            {/* Table */}
            <div className='row row-cols-1 row-cols-sm-4 row-cols-md-6'>
                {products.map((product) =>
                    <div className='col m-2'>
                        <div className="card border-0">
                            <Link to='0001'>
                                <div className='product-thumbnail justify-content-center'>
                                    <img src={product.Picture} className="card-img-top" alt={product.ProductName} />
                                </div>
                            </Link>
                            <div className="card-body">
                                <p className="card-title">{product.ProductName}</p>
                                <p className="card-text">${product.ProductPrice}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Pagination */}
            <div className='d-flex justify-content-end'>
                <nav className='border-0'>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ProductList