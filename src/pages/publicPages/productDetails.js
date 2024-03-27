import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {

    const [product] = useState(
        {
            "ProductName": "Organic Apples",
            "ProductDescription": "Organic Fresh Apples (Bag 2lb)",
            "ProductBrand": 'ABC',
            "ProductPrice": 5.99,
            "Quantity": 150,
            "CategoryId": "Fresh Fruits",
            "Picture": ["https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png",
                "https://theproduceguyz.com/cdn/shop/products/image_38f13c69-1f3b-4a3f-86d5-14a06180efa8.jpg?v=1603080352",
                "https://meridianfarmmarket.ca/cdn/shop/products/Apples-5lb.jpg?v=1673029747",
                "https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/bffcf967-09f4-4b0f-8b39-9fc65641cd57/500x500.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Mq0gUqWH4geNQrBCTVqwjMOqsHRybLsUqw&usqp=CAU"]
        })

    const [previewImage, setPreviewImage] = useState(product.Picture[0])
    const clickImage = (e) => {
        setPreviewImage(e.target.src)
    }

    const navigate = useNavigate()

    return (
        <div className='container text-start'>
            <div className='row justify-content-between'>
                <div className='col-auto'>
                    <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>{'<<Back'}</button>
                </div>
            </div>
            <div className='row'>
                {/* Images */}
                <div className='col-12 col-md-6'>
                    <div className='row justify-content-center'>
                        <img src={previewImage} alt='preview' className="w-50"/>
                    </div>
                    <div className='row row-cols-1 row-cols-md-4 justify-content-start gx-5'>
                        {product.Picture.map((source, index) =>
                            <div className='col m-2'>
                                <button type='button' className='btn p-0 m-0 position-relative' onClick={clickImage}>
                                    <img src={source} className="card-img-top" alt={product.ProductName} />
                                </button>
                            </div>
                        )}
                    </div>

                </div>
                {/* Product */}
                <div className='col-6'>
                    <div className='row mb-3 gx-0 fs-3 fw-bold'>
                        {product.ProductName}
                    </div>
                    <div className='row mb-3 gx-0 text-secondary    '>
                        {product.ProductBrand}
                    </div>
                    <hr />
                    <div className='row mb-3 gx-0'>
                        <label htmlFor='product-description'>Description</label>
                        {product.ProductDescription}
                    </div>

                    <div className='row mb-3 gx-0 fs-3'>
                        ${product.ProductPrice}
                    </div>

                    {/* Buttons */}
                    <div className="row mt-5">
                        <div className="col-auto mx-3">
                        <button className='btn btn-outline-custom-primary'>ADD TO CART</button>
                        </div>
                        <div className="col-auto">
                        <Link to='/shoppingcart' className='btn btn-custom-primary'>BUY NOW</Link>
                        </div>
                    </div>
                </div>
                
                
            </div>

        </div>
    );
};

export default ProductDetails;
