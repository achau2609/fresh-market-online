import StaffMenu from '../../components/Staff/StaffMenu';
import StaffHeader from '../../components/Staff/StaffHeader';
import React from 'react';
import TodayPickupOrders from '../../components/Staff/TodayPickupOrders';
import LowInventoryItems from '../../components/Staff/LowInventoryItems';

const Dashboard = () => {
  return (
    <div className='staff'>
        <StaffHeader />
        <div class="container text-center">
            <div class="row">
                <div class="col-3">
                    <StaffMenu activeItem={1} />
                </div>
                <div class="col-9">
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