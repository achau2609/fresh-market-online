import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TodayPickupOrders = () => {

    const [orders] = useState([{
        orderNo: '0001',
        status: 'Processing',
        contactName: 'Chris Wong',
        contactNo: '(999) 999-9999',
        pickupTime: '12:30PM'
    },{
        orderNo: '0002',
        status: 'Ready for Pickup',
        contactName: 'Nanjala Shui',
        contactNo: '(402) 498-9123',
        pickupTime: '01:40PM'
    },{
        orderNo: '0003',
        status: 'Processing',
        contactName: 'Lester Testerman',
        contactNo: '(812) 743-4740',
        pickupTime: '05:35 PM'
    }])

    return (
        <div className='container'>
            <h4 className='text-start mb-3'>Today's Pickup Orders</h4>
            <div className='table-responsive'>
                <table className="table table-striped table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>Order#</th>
                            <th>Status</th>
                            <th>Contact</th>
                            <th>Pickup time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => <tr>
                            <td><Link to='/staff/orders/0001'>{order.orderNo}</Link></td>
                            <td>{order.status}</td>
                            <td>
                                <div>{order.contactName}</div>
                                <div>{order.contactNo}</div>
                            </td>
                            <td>{order.pickupTime}</td>
                        </tr>)}       
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-end'>
                <nav aria-label="" className='border-0'>
                    <ul className="pagination flex-wrap justify-content-end">
                        <li className="page-item">
                            <a className="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item" aria-current="page">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TodayPickupOrders