import React from "react";

const FAQ = () => {

    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="w-50 text-center">
                    <h1>Hi! How can we help you?</h1>
                    <div className="mt-5">
                        <select className='form-select' name="faq-dropdown" id="faq-dropdown">
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
        </div>
    );
};

export default FAQ;

