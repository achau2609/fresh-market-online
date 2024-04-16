import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../component/CartContext";
import { apiUrl } from "../server-config";
import axios from "axios";
import SelectStateDropDown from "../component/shared/selectStateDropDown";
import Input from "../component/shared/input";
import SelectMonthDropDown from "../component/shared/selectMonthDropDown";

const Checkout = () => {

    const navigate = useNavigate();
    const { cartItems, emptyCart } = useCart();
    const user_id = localStorage.getItem("userId");
    const [orderCount, setOrderCount] = useState();
    const [fulfillMethod, setFulfillMethod] = useState('Delivery');
    const pickupDate = new Date();
    const today = new Date();

    const [userData, setUserData] = useState();
    const [address, setAddress] = useState({
        addressLine: '',
        city: '',
        state: '',
        zip: ''
    });
    const [pickup, setPickup] = useState();
    const [payment, setPayment] = useState({
        cardNo: '',
        cardName: '',
        expMonth: '',
        expYr: '',
        CVV: ''
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

    useEffect(() => {
        axios
            .get(
                `${apiUrl}/api/orders/amount`
            ).then((res) => {
                setOrderCount(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    // initial pickupDate
    useEffect(() => {
        setPickup(today);
    }, [])

    // create response
    const createOrderResponse = () => {
        let order = '';
        if (fulfillMethod === 'Delivery') {
            order = {
                orderId: orderCount + 1,
                customerId: user_id,
                customerName: userData.firstName + " " + userData.lastName,
                contactNo: userData.phoneNumber,
                orderType: fulfillMethod,
                deliveryAddress: address.addressLine + ", " + address.city + ", " + address.state + ", " + address.zip,
                products: cartItems,
                status: "Processing",
                orderDate: today
            }
        } else {
            order = {
                orderId: orderCount + 1,
                customerId: user_id,
                customerName: userData.firstName + " " + userData.lastName,
                contactNo: userData.phoneNumber,
                orderType: fulfillMethod,
                pickupDateTime: pickup,
                products: cartItems,
                status: "Processing",
                orderDate: today
            }
        }

        alert("a ok");
        return order;
    }

    // validation
    const validateOrder = () => {

        let validation = { validate: true, msg: "" };
        // validate address if delivery
        if (fulfillMethod === 'Delivery') {
            if (address.addressLine === '' || address.city === '' || address.state === '' || address.zip === '') {
                validation.validate = false;
                validation.msg = "Missing address!";
            }
        }

        return validation;
    }

    // send order to server
    const handlePlaceOrder = () => {

        // validate if address and payment are filled
        const validation = validateOrder();
        if (validation.validate) {
            // create the body
            const orderBody = createOrderResponse();
            // send the order to backend
            console.log(orderBody);
            // alert customer order has been placed
            alert('Order has been placed. You will be redirected to the homepage.')
            // erase order from localStorage
            // emptyCart();
            // go back to homepage
            navigate("/");
        } else {
            alert(validation.msg)
        }

    }

    // change address details
    const handleChangeAddress = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    // change payment details
    const handleChangePayment = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
    };

    const handlePickupDate = (e) => {
        if (e === 0) {
            setPickup(today);
        } else if (e === 1) {
            pickupDate.setDate(today.getDate() + 1)
            setPickup(pickupDate);
        } else {
            pickupDate.setDate(today.getDate() + 2)
            setPickup(pickupDate);
        }
    }
    // debug

    console.log(address)

    return (
        <div className="public">
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
                            <label className="form-check-label">Delivery</label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="method" id="pickup" checked={fulfillMethod === 'Pickup'} onChange={() => setFulfillMethod('Pickup')} />
                            <label className="form-check-label">Pickup</label>
                        </div>
                    </div>
                    {/* Address box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                        {fulfillMethod === 'Delivery' ? <>

                            Enter address:
                            <hr />
                            <div className="col-12">
                                <Input
                                    name="addressLine"
                                    type="text"
                                    label="Address Line"
                                    value={address.addressLine}
                                    onChange={handleChangeAddress}
                                />
                            </div>
                            <div className="col-md-6">
                                <Input
                                    name="city"
                                    type="text"
                                    label="City"
                                    value={address.city}
                                    onChange={handleChangeAddress}
                                />
                            </div>
                            <div className="col-md-4">
                                <SelectStateDropDown
                                    name="state"
                                    label="State"
                                    value={address.state}
                                    onChange={handleChangeAddress}
                                />
                            </div>
                            <div className="col-md-2">
                                <Input
                                    name="zip"
                                    type="text"
                                    label="Zip"
                                    value={address.zip}
                                    onChange={handleChangeAddress}
                                />
                            </div>

                        </> : <>
                            Choose pickup date and time:
                            <hr />
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input mx-2" type="radio" name="pickupDate" id="pickup" checked={pickup.getDate() === today.getDate()} onChange={() => handlePickupDate(0)} />
                                <label className="form-check-label">{today.toLocaleString('default', { month: 'short' })} {today.getDate()}</label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input mx-2" type="radio" name="pickupDate" id="pickup" checked={pickup.getDate() === (today.getDate() + 1)} onChange={() => handlePickupDate(1)} />
                                <label className="form-check-label">{today.toLocaleString('default', { month: 'short' })} {today.getDate() + 1}</label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input mx-2" type="radio" name="pickupDate" id="pickup" checked={pickup.getDate() === (today.getDate() + 2)} onChange={() => handlePickupDate(2)} />
                                <label className="form-check-label">{today.toLocaleString('default', { month: 'short' })} {today.getDate() + 2}</label>
                            </div>

                        </>}
                    </div>


                    {/* items box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                        <div>Confirm items</div>
                        <hr />
                        <table className="table">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit price</th>
                            </tr>
                            {cartItems.map((product) => (
                                <tr>
                                    <td>
                                        <img src={product.Picture[0]} alt={product.ProductName} className='product-thumbnail' />
                                    </td>
                                    <td>{product.ProductName}</td>
                                    <td> {product.Quantity}</td>
                                    <td >${product.ProductPrice}/each</td>
                                </tr>



                            ))}
                        </table>
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