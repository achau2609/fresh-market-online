import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const navigate = useNavigate();

    return (
        <div>
            {/* Back button */}
            <div className="w-100 bg-custom-light row px-5 py-4 align-items-center">
                <div className="col-auto">
                    <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>Back</button>
                </div>
                <div className="col-auto fw-bold fs-4 w-25 text-center flex-fill">
                    Checkout
                </div>
            </div>

            <div className="container row lh-lg">
                <div className='col-12 col-md-8 d-flex flex-column align-items-center'>
                    {/* Address box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                        Choose an address<br />

                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="address" id="address1" value='1' />
                            <label className="form-check-label" htmlFor="address1">
                                3937 Dufferin Street, Toronto, ON, M6H 4B6
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="address" id="address2" value='2' />
                            <label className="form-check-label" htmlFor="address2">
                                2090 Adelaide St, Toronto, ON, M5H 1P6
                            </label>
                        </div>
                        <div className="form-check d-flex align-items-center">
                            <input className="form-check-input mx-2" type="radio" name="address" id="address3" value='3' />
                            <label className="form-check-label" htmlFor="address3">
                                4162 Tycos Dr, Toronto, ON, M5T 1T4
                            </label>
                        </div>
                    </div>

                    {/* Payment box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                        Choose a payment method<br /><br />

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

                        <div className="mt-3">
                            Enter Discount Code:
                            <div className="row">
                                <input className="form-control w-50" />
                                <button className="btn btn-custom-primary w-25 ms-2">Apply Code</button>
                            </div>
                        </div>
                    </div>

                    {/* items box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary">
                        <div style={{ width: "110%" }}>Confirm items</div>
                        <label for="payment"><input type="radio" id="payment" name="payment1" value="Payment 1" />Visa debit ending in  4093</label><br />
                    </div>

                    {/* confirm box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary text-end">
                        Total: $20
                        <button className="btn btn-custom-primary mx-2">Pay Now</button>

                    </div>
                </div>

                <div className="col-12 col-md-4">
                    {/* price box */}
                    <div className="p-4 my-4 w-75 rounded-4 border-1 border-custom-primary container">
                        <div className="row mb-2 justify-content-between">
                            <div className="col-auto">
                                Items:
                            </div>
                            <div className="col-auto text-end">
                                $20.00
                            </div>
                        </div>

                        <div className="row mb-2 justify-content-between">
                            <div className="col-auto">
                                Shipping:
                            </div>
                            <div className="col-auto text-end">
                                $3.00
                            </div>
                        </div>

                        <div className="row mb-2 justify-content-between">
                            <div className="col-auto">
                                Total Before Tax:
                            </div>
                            <div className="col-auto text-end">
                                $20.00
                            </div>
                        </div>

                        <div className="row mb-2 justify-content-between">
                            <div className="col-auto">
                                Estimated Tax:
                            </div>
                            <div className="col-auto text-end">
                                $20.00
                            </div>
                        </div>
                        <hr />
                        <div className="row mb-2 fw-bold justify-content-between">
                            <div className="col-auto">
                                Total
                            </div>
                            <div className="col-auto text-end">
                                $20.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div >
    );
};

export default Checkout;