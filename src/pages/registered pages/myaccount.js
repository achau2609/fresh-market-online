import React from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {

    return (
        <>
            
            <div className='myacc-navbar'>
                <span className='myacc-navbar-btn'>My Orders</span>
                <span className='myacc-navbar-btn'><Link to="/myaccount" style={{ textDecoration: 'none', color: "black"}}>My Account</Link></span>
            </div>
            <div className='myacc-details-box'>
                <div style={{padding: "10px 0px 10px 20px", margin: "20px", fontSize: "20px"}}>
                    Account Details
                </div>
                
                <div className='myacc-details-input'>
                    <div className='myacc-details-input-label'>
                        <label for="fullname">Name: </label>
                    </div>
                    <div style={{margin: "auto auto", width: "80%"}}>
                        <input type="text" id="fullname" name="fullname" className="myacc-details-input-box"></input><br />
                    </div>
                </div>

                <div className='myacc-details-input'>
                    <div className='myacc-details-input-label'>
                        <label for="email">Email: </label>
                    </div>
                    <div style={{margin: "auto auto", width: "80%"}}>
                        <input type="text" id="email" name="email" className="myacc-details-input-box"></input><br />
                    </div>
                </div>

                <div className='myacc-details-input'>
                    <div className='myacc-details-input-label'>
                        <label for="address">Address: </label>
                    </div>
                    <div style={{margin: "auto auto", width: "80%"}}>
                        <input type="text" id="address" name="address" className="myacc-details-input-box"></input><br />
                    </div>
                </div>

                <button className="myacc-action-btn">Save Changes</button>
                <span style={{float: "right"}}>
                    <button className="myacc-action-btn">Change Password</button>
                    <button className="myacc-action-btn">Add Address</button>
                </span>
                
            </div>
        </>
    )

}

export default MyAccount