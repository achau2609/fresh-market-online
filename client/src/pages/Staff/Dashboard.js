import StaffMenu from '../../component/Staff/StaffMenu';
import StaffHeader from '../../component/Staff/StaffHeader';
import React from 'react';
import TodayPickupOrders from '../../component/Staff/TodayPickupOrders';
import LowInventoryItems from '../../component/Staff/LowInventoryItems';

const Dashboard = () => {
  return (
    <div className='staff'>
        <StaffHeader />
        <div className="container text-center">
            <div className="row">
                <div className="col-3">
                    <StaffMenu activeItem={1} />
                </div>
                <div className="col-9">
                    <TodayPickupOrders />
                    <hr />
                    <LowInventoryItems />
                </div>
            </div>
        </div>       
    </div>
  )
}

export default Dashboard