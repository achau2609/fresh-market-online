import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../component/CartContext";
import { apiUrl } from "../server-config";
import axios from "axios";
import SelectStateDropDown from "../component/shared/selectStateDropDown";
import Input from "../component/shared/input";

const Checkout = () => {

    const navigate = useNavigate();
    const { cartItems, emptyCart } = useCart();
    const user_id = localStorage.getItem("userId");
    const [ orderCount, setOrderCount ] = useState();
    const [ fulfillMethod, setFulfillMethod ] = useState('Delivery');

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthDate: "",
        phoneNumber: "",
        address: [{ addressLine: '', city: '', state: '', zip: '' }],
    });
    const [address, setAddress] = useState({
        addressLine:'',
        city:'',
        state:'',
        zip:''
    })
    const [payment, setPayment] = useState({
        cardNo: "",
        cardName:"",
        expMonth:"",
        expYr:"",
        CVV:""
    });

    // costs
    const subtotal = cartItems.reduce((total, item) => total + item.ProductPrice * item.Quantity, 0);
    const deliveryFee = cartItems.length > 0 ? 1.49 : 0; // Set delivery fee to $1.49 if there are items, otherwise $0
    const taxRate = 0.13; 
    const taxAmount = subtotal * taxRate;
    const total = subtotal + deliveryFee + taxAmount;

    // fetch userData
    useEffect(() => {
        axios
          .get(
            `${apiUrl}/api/users/${user_id}`
          )
          .then((res) => {
            setUserData(res.data);
          })
          .catch((err) => console.log(err));
      }, []);

    // get orderNo.
    /*
    useEffect(() => {
        const orderCounting = await orderModel
    }, []);*/

    // create response
    const createOrderResponse = () => {
        if (fulfillMethod === 'Delivery') {
            const order = {
                customerId: user_id,
                customerName: userData.firstName + userData.lastName,
                contactNo: userData.contactNo,
                orderType: fulfillMethod,
                deliveryAddress: userData.address.addressLine + ", " + userData.address.city + ", " + userData.address.state + ", " + userData.address.zip,
                products: cartItems,
                status: "Processing",
                orderDate: Date.now
            }
        } else {
            const order = {
                customerId: user_id,
                customerName: userData.firstName + userData.lastName,
                contactNo: userData.contactNo,
                orderType: fulfillMethod,
                pickupDateTime: Date.now,
                products: cartItems,
                status: "Processing",
                orderDate: Date.now
            }
        }
        
        alert("a ok");
        return;
    }

    // validation
    const validateOrder = () => {

        let validation = { validate: true, msg: "" };
        // validate address if delivery
        if (fulfillMethod === 'Delivery') {
            if (userData.address.addressLine === '' || userData.address.city === '' || userData.address.state === '' || userData.address.zip === '') {
                validation.validate = false;
                validation.msg = "Missing address!"; 
            }
        }
        
        // validate payment
        if (payment.cardNo === '' || payment.cardName === '' || payment.expMonth === '' || payment.expYr === '' || payment.CVV === '') {
            validation.validate = false;
            validation.msg = "Missing payment info!"; 
        }
    }

    // send order to server
    const handlePlaceOrder = () => {

        // validate if address and payment are filled
        const validation = validateOrder();
        if (validation.validate) {
            // create the body
            const orderBody = createOrderResponse();
            // send the order to backend

            // alert customer order has been placed
            alert('Order has been placed. You will be redirected to the homepage.')
            // erase order from localStorage
            emptyCart();
            // go back to homepage
            navigate("/");
        } else {
            alert(validation.msg)
        }
        
    }

    // change address details
    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    // debug
    console.log(address)


    return (
        <div>
            {/* Back button */}
            <div className="w-100 bg-custom-light row px-5 py-4 align-items-center">
                <div className="col-auto">
                    <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>Back</button>
                </div>
                <div className="col-auto fw-bold fs-4 w-25 text-center flex-fill">
                    Checkout
                </div>
            </div>

            <div className="container row lh-lg ">
                <div className='col-12 col-md-8 d-flex flex-column align-items-center'>

                    {/* Pick method*/}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                        Select method
                        <hr />
                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="method" id="delivery" checked={fulfillMethod === 'Delivery'} onChange={() => setFulfillMethod('Delivery')} />
                            <label className="form-check-label" htmlFor="address1">
                                Delivery
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="method" id="pickup" checked={fulfillMethod === 'Pickup'} onChange={() => setFulfillMethod('Pickup')} />
                            <label className="form-check-label" htmlFor="address2">
                                Pickup
                            </label>
                        </div>
                    </div>
                    {/* Address box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                    { fulfillMethod === 'Delivery' ? <>
                        
                        Enter address:
                        <hr />
                        <div className="col-12">
                            <Input
                                name="addressLine"
                                type="text"
                                label="Address Line"
                                value={address.addressLine}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <Input
                                name="city"
                                type="text"
                                label="City"
                                value={address.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <SelectStateDropDown
                                name="state"
                                label="State"
                                value={address.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-2">
                            <Input
                                name="zip"
                                type="text"
                                label="Zip"
                                value={address.zip}
                                onChange={handleChange}
                            />
                        </div>
                    
                    </> : <>
                        Choose pickup date and time:

                    </>}
                    </div>

                    

                    {/* Payment box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                        Choose a payment method

                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="payment" id="payment1" />
                            <label className="form-check-label" htmlFor="payment1">
                                Visa debit ending in  4093
                            </label>
                        </div>

                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="payment" id="payment2" />
                            <label className="form-check-label" htmlFor="payment2">
                                Credit card ending in  3203
                            </label>
                        </div>

                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="payment" id="payment3" />
                            <label className="form-check-label" htmlFor="payment3">
                                Mastercard ending in  8912
                            </label>
                        </div>

                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="payment" id="payment4" />
                            <label className="form-check-label" htmlFor="payment4">
                                America Express ending in  2569
                            </label>
                        </div>
                    </div>

                    {/* items box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                        <div>Confirm items</div>
                        <div className='table-responsive mt-3'>
                            <table className="table table-striped table-hover text-start table-custom">
                                <thead>
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col'>Product</th>
                                        <th scope='col'>Unit Price</th>
                                        <th scope='col'>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody className='py-3'>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src="https://assets.shop.loblaws.ca/products/21121560001/b1/en/front/21121560001_front_a07.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3" />
                                            Brocoli Crown
                                        </td>
                                        <td>
                                            $15.18
                                        </td>
                                        <td>
                                            9
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <img src="https://assets.shop.loblaws.ca/products/20761372/b1/en/front/20761372_front_a07.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3" />
                                            Whole Cremini Mushrooms
                                        </td>
                                        <td>$11.26</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    {/* price box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary container">
                        <div className="row mb-2 justify-content-between">
                            <div className="col-auto">Subtotal:</div>
                            <div className="col-auto text-end">${subtotal.toFixed(2)}</div>
                        </div>

                        <div className="row mb-2 justify-content-between">
                            <div className="col-auto">Shipping:</div>
                            <div className="col-auto text-end">${deliveryFee.toFixed(2)}</div>
                        </div>

                        <div className="row mb-2 justify-content-between">
                            <div className="col-auto">Estimated Tax:</div>
                            <div className="col-auto text-end">${taxAmount.toFixed(2)}</div>
                        </div>
                        <hr />
                        <div className="row mb-2 fw-bold justify-content-between">
                            <div className="col-auto">Total</div>
                            <div className="col-auto text-end">${total.toFixed(2)}</div>
                        </div>
                    </div>

                    {/* pay now*/}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary container">
                        <button className="btn btn-custom-primary ms-4" onClick={handlePlaceOrder}>Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;