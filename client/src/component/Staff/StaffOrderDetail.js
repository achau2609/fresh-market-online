import React from 'react'
import { Link } from 'react-router-dom'

const StaffOrderDetail = () => {
    return (
        <div className='container text-start'>
            <div className='row'>
                <Link to='/staff/orders'>{'<<Back'}</Link>
            </div>
            <div className='row'>
                <h4>Order # - 0001</h4>
            </div>
            <hr />
            <div className='row mb-4'>
                <div className='col-3'>Order Date</div>
                <div className='col-9'>03/01/2024</div>
            </div>
            <div className='row my-4'>
                <div className='col-3'>Order Type</div>
                <div className='col-9'>Delivery</div>
            </div>
            <div className='row my-4'>
                <div className='col-3'>Customer Name</div>
                <div className='col-9'>Chris Wong</div>
            </div>
            <div className='row my-4'>
                <div className='col-3'>Customer Contact</div>
                <div className='col-9'>(999) 999-9999</div>
            </div>
            <div className='row my-4'>
                <div className='col-3'>Delivery Address</div>
                <div className='col-9'>
                    <div>
                        99 Fallsview Rd, Dundas, Ontario
                    </div>
                    <div>
                        L9H 5J8
                    </div>
                </div>
            </div>
            <div className='row my-4'>
                <div className='col-3'>Status</div>
                <div className='col-3'>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Processing</option>
                        <option className="1">Ready</option>
                        <option className="2">Completed</option>
                        <option className="3">Cancelled</option>
                    </select>
                </div>
                <div className='col-3'>
                    <a href='#' className='align-self-end'>Save</a>
                </div>
            </div>
            <hr />
            <div className='table-responsive'>
                <table className="table table-striped table-hover text-start">
                    <thead className="table-light">
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
    )
}

export default StaffOrderDetail