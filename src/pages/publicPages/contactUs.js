import React from "react";
import Header from './Header';
import Navigation from './Navigation';
import TopRightBar from './TopRightBar';
import Footer from './Footer';
import '../../css/Public.css';

const ContactUs = () => {
    // Inline CSS for the form input containers -Decided not to put inside css im having travel in running
    const formGroupStyle = {
        display: 'flex',
        marginBottom: '1rem',
        alignItems: 'center',
        justifyContent: 'flex-start' // Adjust the alignment of the items
    };

    // Inline CSS for the labels to ensure spacing
    const labelStyle = {
        minWidth: '100px', // Minimum width for the label
        paddingRight: '20px' // Space between the label and the input box
    };

    // Inline CSS for the form inputs
    const inputStyle = {
        flex: 1,
        marginRight: '96px', // 1 inch margin
        maxWidth: 'calc(100% - 116px)' // Adjusting for label width and spacing
    };

    // Inline CSS for the last form input (textarea) to avoid adding the right margin
    const lastInputStyle = {
        ...inputStyle,
        marginRight: 0 // Removing right margin for the last item
    };

    return (
        <div className="App">
            <Header />
            <TopRightBar />
            <Navigation />
            <div className="content">
                <h1>CONTACT US</h1>
                <form className="contact-form">
                    <div style={formGroupStyle}>
                        <label htmlFor="name" style={labelStyle}>Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="mobile" style={labelStyle}>Mobile Phone</label>
                        <input type="tel" id="mobile" name="mobile" placeholder="Your mobile number" style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email address" style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="subject" style={labelStyle}>Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject of your message" style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="message" style={labelStyle}>Message Details</label>
                        <textarea id="message" name="message" placeholder="Details of your message" style={lastInputStyle}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
