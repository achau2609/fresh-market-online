import React from 'react'
import StaffMenu from '../../component/Staff/StaffMenu';
import StaffHeader from '../../component/Staff/StaffHeader';
import StaffReport from '../../component/Staff/StaffReport';

const StaffReportsPage = () => {
    return (
        <div className='staff'>
            <StaffHeader />
            <div class="container text-center">
                <div class="row">
                    <div class="col-3">
                        <StaffMenu activeItem={5} />
                    </div>
                    <div class="col-9">
                        <StaffReport />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffReportsPage