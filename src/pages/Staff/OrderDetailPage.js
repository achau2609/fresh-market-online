import React from 'react'
import StaffMenu from '../../components/Staff/StaffMenu';
import StaffHeader from '../../components/Staff/StaffHeader';
import StaffOrderDetail from '../../components/Staff/StaffOrderDetail';

const OrderDetailPage = () => {
  return (
    <div className='staff'>
    <StaffHeader />
    <div class="container text-center">
        <div class="row">
            <div class="col-3">
                <StaffMenu activeItem={2} />
            </div>
            <div class="col-9">
                <StaffOrderDetail />
            </div>
        </div>
    </div>       
</div>
  )
}

export default OrderDetailPage;