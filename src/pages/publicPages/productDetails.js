import React from "react";
import Header from './Header';
import Navigation from './Navigation';
import TopRightBar from './TopRightBar';
import Footer from './Footer';
import appleImage from '../../image/apple.png'; // Import the image
import '../../css/Public.css';

// Updated product data for Organic Apple
const productData = {
    ProductName: "Organic Apple",
    ID: "APL123",
    ProductDescription: "Delicious and fresh Organic Apples from the sunny orchards of Georgia. Crisp, juicy, and sweet, perfect for your healthy lifestyle.",
    ProductPrice: "$2.00",
    Quantity: 150,
    CategoryId: "1",
    imageUrl: appleImage // Directly use the imported image here
};

const ProductDetails = () => {
    return (
        <div className="App">
            <Header />
            <TopRightBar />
            <Navigation />
            <div className="product-details-container">
                <div className="product-images">
                    <img className="main-image" src={productData.imageUrl} alt={productData.ProductName} />
                </div>
                <div className="product-details-info">
                    <h1 className="product-details-title" style={{ fontWeight: 'bold', fontSize: 'larger' }}>{productData.ProductName}</h1>
                    <p>ID: {productData.ID}</p>
                    <p className="product-details-description">{productData.ProductDescription}</p>
                    <h2 className="product-details-price">{productData.ProductPrice}</h2>
                    <p>Quantity: {productData.Quantity}</p>
                    <p>Category ID: {productData.CategoryId}</p>
                    <div className="product-details-buttons">
                        <button className="button add-to-cart">ADD TO CART</button>
                        <button className="button buy-now">BUY NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
