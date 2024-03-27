import React from 'react'
import StaffMenu from '../../component/Staff/StaffMenu';
import StaffHeader from '../../component/Staff/StaffHeader';
import StaffOrderDetail from '../../component/Staff/StaffOrderDetail';

const OrderDetailPage = () => {
  return (
    <div className='staff'>
    <StaffHeader />
    <div className="container text-center">
        <div className="row">
            <div className="col-3">
                <StaffMenu activeItem={2} />
            </div>
            <div className="col-9">
                <StaffOrderDetail />
            </div>
        </div>
    </div>       
</div>
  )
}

export default OrderDetailPage;