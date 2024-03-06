import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {

    const [orders] = useState([{
        OrderNo: '0001',
        CustomerName: 'Chris Wong',
        ContactNo: '(999) 999-9999',
        Status: 'Processing',
        OrderDate: '03/01/2024'
    }, {
        OrderNo: '0002',
        CustomerName: 'Nanjala Shui',
        ContactNo: '(402) 498-9123',
        Status: 'Ready for Pickup',
        OrderDate: '03/02/2024'
    }, {
        OrderNo: '0003',
        CustomerName: 'Nanjala Shui',
        ContactNo: '(812) 743-4740',
        Status: 'Processing',
        OrderDate: '03/04/2024'
    }])

    return (
        <div>
            {/* Search */}
            <div className='container mb-4'>
                <div className="card border-0">
                    <h5 class="card-header text-start">Search</h5>
                    <div claclassNames="card-body">
                        <div className='card-text py-3'>
                            <form className='container text-start'>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <label htmlFor='order-number'>Order#</label>
                                        <input id='order-number' type='text' className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <label htmlFor='order-status'>Status</label>
                                        <select class="form-select" id="order-status">
                                            <option selected>--All--</option>
                                            <option value="1">Processing</option>
                                            <option value="2">Ready for Pickup</option>
                                            <option value="3">Completed</option>
                                            <option value="4">Cancelled</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <label htmlFor='order-date'>Order Date</label>
                                        <input type="date" id="order-date" value="2018-07-22" className='form-control' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-3'>
                                        <button type='button' className='btn btn-success me-3'>Search</button>
                                        <button type='button' className='btn btn-light'>Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div className='table-responsive'>
                <table className="table table-striped table-hover ">
                    <thead className="table-light">
                        <tr>
                            <th>Order Date</th>
                            <th>Order #</th>
                            <th>Contact</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) =>
                            <tr>
                                <td>{order.OrderDate}</td>
                                <td><Link to='/staff/orders/0001'>{order.OrderNo}</Link></td>
                                <td>
                                    <div>
                                        {order.CustomerName}
                                    </div>
                                    <div>
                                        {order.ContactNo}
                                    </div>
                                </td>
                                <td>{order.Status}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className='d-flex justify-content-end'>
                <nav className='border-0'>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Orders