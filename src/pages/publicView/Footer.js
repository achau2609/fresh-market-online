import React from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h4>CUSTOMER SERVICE</h4>
                <a href="#contact">Contact Us</a>
                <a href="#faq">FAQ</a>
                <a href="#return">Return & Refund</a>
                <a href="#payment">Payment Methods</a>
                <a href="#tracking">Order Tracking</a>
            </div>
            <div className="footer-column">
                <h4>SERVICES</h4>
                <a href="#return-policy">Return Policy</a>
                <a href="#delivery">Delivery Policy</a>
            </div>
            <div className="footer-column">
                <h4>ABOUT</h4>
                <a href="#about">About Us</a>
                <a href="#privacy">Privacy Policy</a>
            </div>
            <div className="footer-column">
                <h4>PAYMENT</h4>
                <div className="payment-icons">
                    <FaCcVisa size="2em" />
                    <FaCcMastercard size="2em" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;