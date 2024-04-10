import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Pagination from './Helpers/pagination'

const TodayPickupOrders = () => {

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const recordPerPage = 10;
    const [orderCount, setOrderCount] = useState(0);
    const navigate = useNavigate();

    const changePage = newPage => {
        setPage(newPage)
    }

    const transformTime = (string) => {
        let date = new Date(string);
        // TODO: fix issue: date retrieve from database seems UTC, system auto convert it to EDT.
        let hour = date.getHours();
        let time = 'AM';
        if (hour > 12){
            hour = hour - 12;
            time = 'PM';
        }
        return `${hour.toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} ${time}`;
    }

    useEffect(() => {

        fetch(`http://localhost:8080/api/orders/todayorders?page=${page}&limit=${recordPerPage}`)
            .then((res) => {
                if (res.ok)
                    return res.json();
                else navigate('*');
            }
            )
            .then(res => {
                setOrderCount(res['count'])
                const data = res['data'].map(e => {
                    e.PickupDateTime = transformTime(e.PickupDateTime);
                    return e
                });
                setOrders(data)
            })
            .catch(err => {
                console.log(err)
            });

    }, [page, navigate])

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
                        {orders.map((order) =>
                            <tr>
                                <td><Link to={`/staff/orders/${order.orderNo}`}>{order.orderNo}</Link></td>
                                <td>{order.Status}</td>
                                <td>
                                    <div>{order.CustomerName}</div>
                                    <div>{order['Contact#']}</div>
                                </td>
                                <td>{order.PickupDateTime}</td>
                            </tr>
                        )}
                    </tbody>
                    {orders.length === 0 && <p>No orders found.</p>}
                </table>
            </div>
            <div className='d-flex justify-content-end'>
                {
                    orderCount > 0 &&
                    <Pagination itemsCount={orderCount} pageSize={recordPerPage} currentPage={page} onPageChange={changePage} />
                }
            </div>
        </div>
    )
}

export default TodayPickupOrders