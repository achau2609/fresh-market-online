import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Registered.css"
 
const Checkout = () => {

    const navigate = useNavigate();

    return (
        <div>
            {/* Back button */}
            <div className="checkout-topbar">
                <button className="checkout-bckbtn" onClick={() => navigate(-1)}>Back</button>
                <div className="checkout-title">
                    Checkout
                </div>
            </div>
            
            <div style={{display: "flex"}}>
                <div className="checkout-leftbox">
                {/* Address box */}
                <div className="address-box">
                    Choose an address<br />
                    
                    <label for="address"><input type="radio" id="address" name="address1" value="Address 1" />3937 Dufferin Street, Toronto, ON, M6H 4B6 </label><br />
                    <label for="address"><input type="radio" id="address" name="address2" value="Address 2" />2090 Adelaide St, Toronto, ON, M5H 1P6 </label><br />
                    <label for="address"><input type="radio" id="address" name="address3" value="Address 3" />4162 Tycos Dr, Toronto, ON, M5T 1T4 </label><br />
                    
                </div>

                {/* Payment box */}
                <div className="payment-box">
                    Choose a payment method<br /><br />

                    <label for="payment"><input type="radio" id="payment" name="payment1" value="Payment 1" />Visa debit ending in  4093</label><br />
                    <label for="payment"><input type="radio" id="payment" name="payment1" value="Payment 1" />Credit card ending in  3203</label><br />
                    <label for="payment"><input type="radio" id="payment" name="payment1" value="Payment 1" />Mastercard ending in  8912</label><br />
                    <label for="payment"><input type="radio" id="payment" name="payment1" value="Payment 1" />America Express ending in  2569</label><br />

                    Enter Discount Code:
                    <input className="payment-box-discount-code"></input>
                    <button className="confirm-box-button">Apply Code</button>

                </div>

                {/* items box */}
                <div className="items-box">
                    <div style={{width: "110%"}}>Confirm items</div>
                    <label for="payment"><input type="radio" id="payment" name="payment1" value="Payment 1" />Visa debit ending in  4093</label><br />
                </div>

                {/* confirm box */}
                <div className="confirm-box">
                    <button className="confirm-box-button">Pay Now</button>
                    <div className="confirm-box-price">
                        Total: $20
                    </div>
                </div>
            </div>
            
            <div className="checkout-rightbox">
                {/* price box */}
                <div className="price-box">
                    <p className="price-box-lefttext">
                        Items:
                        <span className="price-box-righttext">$20.00</span>
                    </p>
                    <p className="price-box-lefttext">
                        Shipping:
                        <span className="price-box-righttext">$3.00</span>
                    </p>
                    <p className="price-box-lefttext">
                    Total Before Tax:
                        <span className="price-box-righttext">$20.00</span>
                    </p>
                    <p className="price-box-lefttext">
                    Estimated Tax:
                        <span className="price-box-righttext">$20.00</span>
                    </p><br />
                    <p className="price-box-lefttext" style={{fontWeight: "bold"}}>
                        Total
                        <span className="price-box-righttext">$20.00</span>
                    </p>

                </div>
            </div>
            </div>

            

            

            

        </div>
    );
};
 
export default Checkout;