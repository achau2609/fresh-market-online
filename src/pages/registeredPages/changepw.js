import React from 'react';
import { Link } from 'react-router-dom';

const ChangePw = () => {

    return (
        <>
            
            <div className='myacc-navbar'>
                <span className='myacc-navbar-btn'>My Orders</span>
                <span className='myacc-navbar-btn'><Link to="/myaccount" style={{ textDecoration: 'none', color: "black"}}>My Account</Link></span>
            </div>
            <div className='myacc-details-box'>
                <div style={{padding: "10px 0px 10px 20px", margin: "20px", fontSize: "20px"}}>
                    Change password
                </div>
                
                <div className='myacc-details-input'>
                    <div className='myacc-details-input-label' style={{width: "50%"}}>
                        <label for="currentpw">Current password: </label>
                    </div>
                    <div style={{margin: "auto auto", width: "80%"}}>
                        <input type="password" id="currentpw" name="currentpw" className="myacc-details-input-box"></input><br />
                    </div>
                </div>

                <div className='myacc-details-input'>
                    <div className='myacc-details-input-label' style={{width: "50%"}}>
                        <label for="newpw">New password: </label>
                    </div>
                    <div style={{margin: "auto auto", width: "80%"}}>
                        <input type="password" id="newpw" name="newpw" className="myacc-details-input-box"></input><br />
                    </div>
                </div>

                <div className='myacc-details-input'>
                    <div className='myacc-details-input-label' style={{width: "50%"}}>
                        <label for="confirmpw">Repeat new password: </label>
                    </div>
                    <div style={{margin: "auto auto", width: "80%"}}>
                        <input type="password" id="confirmpw" name="confirmpw" className="myacc-details-input-box"></input><br />
                    </div>
                </div>

                <div style={{margin: "50px 0px 10px 20px"}}>
                    <span style={{float: "right"}}>
                        <button className="myacc-action-btn"><Link to="/myaccount" style={{ textDecoration: 'none', color: "white"}}>Save changes</Link></button>
                </span>
                </div>
                
            </div>
            
        </>
    )

}

export default ChangePw