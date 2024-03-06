import React from "react";

import '../../css/Public.css'; 

const FAQ = () => {

    const dropdownStyle = {
        width: '100%', 
        maxWidth: '600px', 
        margin: '96px auto', 
        fontSize: '1.25rem', 
    };

    const contentStyle = {
        marginTop: '0', 
        padding: '0 96px', 
    };

    return (
        <div className="App">

            <div className="content" style={contentStyle}>
                <h1>Hi! How can we help you?</h1>
                <div className="dropdown">
                    <select name="faq-dropdown" id="faq-dropdown" style={dropdownStyle}>
                        <option value="qr-payments">Is QR Payments available?</option>
                        <option value="online-bills-payment">What is Online Bills Payment?</option>
                        <option value="payment-works">How does the payment works?</option>
                        <option value="related-payments">Other FAQs related to Bills Payments</option>
                        <option value="choose-payment-option">How do I choose payment option?</option>
                        <option value="change-payment-method">[New to it] Can I change my payment method?</option>
                        <option value="credit-debit-option">How do I choose a Credit/Debit Card as a payment option?</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default FAQ;

