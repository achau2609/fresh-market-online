import React from 'react'
import { Link } from 'react-router-dom'

const CartSummary = () => {

    return (
        <div className="card">
            <div className="card-header">
                Cart Summary
            </div>
            <div className="container card-body">
                <div className='row'>
                    <div className='col-md-8'>Subtotal:</div>
                    <div className='col-md-4'> $9.99</div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>Delivery fee:</div>
                    <div className='col-md-4'>$1.49</div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>HST:</div>
                    <div className='col-md-4'> $3.55</div>
                </div>
                <div className='row mt-3 fw-bold'>
                    <div className='col-md-8'>Est. Total:</div>
                    <div className='col-md-4'> $15.03</div>
                </div>
            </div>
            <Link to='/checkout' className='btn btn-custom-primary'>Proceed to Checkout</Link>
        </div>
    )
}

export default CartSummary