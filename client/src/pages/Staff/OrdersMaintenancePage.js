import StaffMenu from '../../component/Staff/StaffMenu';
import StaffHeader from '../../component/Staff/StaffHeader';
import React from 'react';
import Orders from '../../component/Staff/OrdersMaintenance';

const OrdersMaintenancePage = () => {
  return (
    <div className='staff'>
        <StaffHeader />
        <div className="container text-center">
            <div className="row">
                <div className="col-3">
                    <StaffMenu activeItem={2} />
                </div>
                <div className="col-9">
                    <Orders />
                </div>
            </div>
        </div>       
    </div>
  )
}

export default OrdersMaintenancePage