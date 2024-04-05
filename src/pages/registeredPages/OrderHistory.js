import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MyAccountNavBar from '../../component/MyAccountNavBar'

const OrderHistory = () => {

    const [orders] = useState([{
        orderNo: "5001",
        orderType: "Delivery",
        DeliveryAddress: "100 Main St, Metropolis, NY",
        Zip: "10001",
        orderDate: "2024-03-10",
        Status: "Processing",
        totalAmount: 500.99,
        productPicture: "https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png"
    }, {
        orderNo: "5002",
        orderType: "Pickup",
        PickupDateTime: "2024-03-10 02:00 PM",
        orderDate: "2024-03-11",
        Status: "Completed",
        totalAmount: 101.23,
        productPicture: "https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png"
    }])

    return (
        <div className='container w-50'>

            <MyAccountNavBar active={1} />

            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active my-3" id="nav-orders" role="tabpanel" aria-labelledby="nav-orders-tab" tabindex="0">
                    {orders.map((order) =>
                        <div className="card rounded-0">
                            <div className="card-body row align-items-center">
                                <div className='col-auto col-md-9'>
                                    <h5 className="card-title">Order Number: {order.orderNo}
                                        <span className="ms-3 badge bg-secondary-subtle text-secondary">{order.Status}</span></h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Date: {order.orderDate}</h6>
                                    <p className="card-text">
                                        Order Type: {order.orderType}
                                        <br />
                                        {order.orderType === 'Delivery' ? 'Address: ' + order.DeliveryAddress : 'Pickup Date: ' + order.PickupDateTime}
                                    </p>
                                </div>
                                <div className='col-auto col-md-3'>
                                    <Link to="/myaccount/orderhistory/0001" className="btn btn-custom-primary">Order Detail</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OrderHistory