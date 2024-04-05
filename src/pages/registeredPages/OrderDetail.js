import React from 'react'
import { Link } from 'react-router-dom'

const OrderDetail = () => {
    return (
        <div className='container text-start'>
            <div className='row justify-content-between'>
                <div className='col-auto col-md-9'>
                    <h4>Order # - 0001 <span class="badge text-bg-secondary">Processing</span></h4>
                </div>
                <div className='col-auto col-md-3 text-end'>
                    <Link to='/orderhistory'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <hr />
            <div className='row mb-2'>
                <div className='col-3'>Order Date</div>
                <div className='col-9'>03/01/2024</div>
            </div>
            <div className='row my-2'>
                <div className='col-3'>Order Type</div>
                <div className='col-9'>Delivery</div>
            </div>
            <div className='row my-2'>
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
                        <tr>
                            <td></td>
                            <td className='fw-bold text-end'>Total:
                            </td>
                            <td>$249.22</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderDetail