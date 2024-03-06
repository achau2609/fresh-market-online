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
    },{
        orderNo: "5002",
        orderType: "Pickup",
        PickupDateTime: "2024-03-10 02:00 PM",
        orderDate: "2024-03-11",
        Status: "Completed",
        totalAmount: 101.23,
        productPicture: "https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png"
    }])

    return (
        <>
            
            <MyAccountNavBar />

            {orders.map((order) =>
                <div class="card">
                    <div class="card-body row align-items-center">
                        <div className='col-auto col-md-9'>
                            <h5 class="card-title">Order Number: {order.orderNo} <span class="badge text-bg-secondary">{order.Status}</span></h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Date: {order.orderDate}</h6>
                            <p class="card-text">
                                Order Type: {order.orderType}
                                <br />
                                {order.orderType === 'Delivery' ? 'Address: ' + order.DeliveryAddress : 'Pickup Date: ' + order.PickupDateTime}
                            </p>
                        </div>
                        <div className='col-auto col-md-3'>
                            <Link to="/myaccount/orderhistory/0001" class="btn btn-success">Order Detail</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderHistory