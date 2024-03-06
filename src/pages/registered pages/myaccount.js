import React from 'react';
import { Link } from 'react-router-dom';
import MyAccountNavBar from '../../component/MyAccountNavBar';

const MyAccount = () => {

    return (
        <>
            
            <MyAccountNavBar />
            
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

                <div style={{margin: "50px 0px 10px 20px"}}>
                    <button className="myacc-action-btn">Save Changes</button>
                    <span style={{float: "right"}}>
                        <button className="myacc-action-btn"><Link to="/myaccount/changepw" style={{ textDecoration: 'none', color: "white"}}>Change Password</Link></button>
                        <button className="myacc-action-btn">Add Address</button>
                </span>
                </div>
                
            </div>
            
        </>
    )

}

export default MyAccount