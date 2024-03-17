import React from 'react';
import StaffMenu from '../../component/Staff/StaffMenu';
import StaffHeader from '../../component/Staff/StaffHeader';
import Categories from '../../component/Staff/Categories';

const CategoryMaintenancePage = () => {
  return (
    <div className='staff'>
        <StaffHeader />
        <div class="container text-center">
            <div class="row">
                <div class="col-3">
                    <StaffMenu activeItem={4} />
                </div>
                <div class="col-9">
                    <Categories />
                </div>
            </div>
        </div>       
    </div>
  )
}

export default CategoryMaintenancePage