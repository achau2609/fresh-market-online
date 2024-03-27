import React from "react";

const ContactUs = () => {

    return (
        <div className="container">

            <form className=''>
                <div className='ps-3 fs-3 mt-5 text-center'>
                    CONTACT US
                </div>
                <div className='row justify-content-center'>
                    <form>
                        <div className='row g-3 align-items-center my-3'>
                            <div className="col-12 col-md-4 text-end">
                                <label htmlFor="fullname" className="col-form-label">Name</label>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" id="fullname" className="form-control" placeholder='Your name' />
                            </div>
                        </div>

                        <div className='row g-2 align-items-center my-3'>
                            <div className="col-12 col-md-4 text-end">
                                <label htmlFor="phone" className='col-form-label'>Mobile Phone</label>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" id="phone" className="form-control" placeholder="Your mobile number" />
                            </div>
                        </div>

                        <div className='row g-2 align-items-center my-3'>
                            <div className="col-12 col-md-4 text-end">
                                <label htmlFor="email" className='col-form-label'>Email</label>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" id="email" className="form-control" placeholder='Your email address' />
                            </div>
                        </div>

                        <div className='row g-2 align-items-center my-3'>
                            <div className='col-12 col-md-4 text-end'>
                                <label htmlFor="subject" className='col-form-label'>Subject</label>
                            </div>
                            <div className='col-12 col-md-6'>
                                <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject of your message" />
                            </div>
                        </div>

                        <div className='row g-2 align-items-center my-3'>
                            <div className='col-12 col-md-4 text-end'>
                                <label htmlFor="msg" className='col-form-label'>Message Details</label>
                            </div>
                            <div className='col-12 col-md-6'>
                                <textarea class="form-control" id="msg" rows="3"></textarea>
                            </div>
                        </div>

                        <div className='row mb-3 mt-4 text-end'>
                            <div className="col-12 col-md-10">
                                <button className="btn btn-custom-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>


            </form>
        </div>
    );
};

export default ContactUs;
