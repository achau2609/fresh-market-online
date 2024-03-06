import React from 'react';
import { Link } from 'react-router-dom';
import MyAccountNavBar from '../../component/MyAccountNavBar';

const MyAccount = () => {

    return (
        <div className='container w-50'>

            <MyAccountNavBar active={2} />

            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active mt-5 mb-3" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab" tabindex="0">
                    <form className='container w-75'>
                        <div className='ps-3 fs-5 row mt-5'>
                            Account Details
                        </div>
                        <div className='row justify-content-center'>

                            <div className='row g-3 align-items-center'>
                                <div className="col-12 col-md-4 text-end">
                                    <label for="fullname" className="col-form-label">Name:</label>
                                </div>
                                <div className="col-12 col-md-6">
                                    <input type="text" id="fullname" className="form-control" value='John Smith' />
                                </div>
                            </div>

                            <div className='row g-2 align-items-center'>
                                <div className="col-12 col-md-4 text-end">
                                    <label for="email" className='col-form-label'>Email: </label>
                                </div>
                                <div className="col-12 col-md-6">
                                    <input type="text" id="email" className="form-control" value='jsmith0915@gmail.com' />
                                </div>
                            </div>

                            <div className='row g-2 align-items-center'>
                                <div className='col-12 col-md-4 text-end'>
                                    <label for="address" className='col-form-label'>Address: </label>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <input type="text" id="address" name="address" className="form-control" value="131 Park Ln Cir, ON N9V 4B3" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 mb-3'>
                            <button className="btn btn-custom-primary">Save Changes</button>
                            <span className='float-end'>
                                <Link to="/myaccount/changepw"><button className="btn btn-custom-primary">Change Password</button></Link>
                            </span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default MyAccount