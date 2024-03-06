import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PasswordInput = ({ placeholder }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const iconClassName = `password-toggle-icon ${showPassword ? 'active' : ''}`;

    return (
        <div className="form-input-container">
            <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={placeholder}
                className="form-input"
            />
            <i
                onClick={() => setShowPassword(!showPassword)}
                className={iconClassName}
            >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </i>
        </div>
    );
};

const AdminStaffLoginForm = ({ role, onClose }) => (
    <div className={`${role}-login-form`}>
        <div className="form-input-container">
            <input type="email" placeholder={`${role} Email`} className="form-input" />
        </div>
        <PasswordInput placeholder="Password" />
        <div className="form-button-container">
            <Link to={role === 'Admin' ? '/admin' : '/staff'} onClick={onClose} className='btn btn-custom-primary w-75 py-3'>
                Login
            </Link>
        </div>
    </div>
);

const LoginModal = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('login');
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isAdminStaffLogin, setIsAdminStaffLogin] = useState(false);
    const [adminStaffActiveTab, setAdminStaffActiveTab] = useState('admin');


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.className === 'modal') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const showForgotPassword = () => {
        setIsForgotPassword(true);
    };

    const backToLogin = () => {
        setIsForgotPassword(false);
        setIsAdminStaffLogin(false);
        setActiveTab('login');
    };

    const showAdminStaffLogin = () => {
        setIsAdminStaffLogin(true);
        setIsForgotPassword(false);
    };

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {!isForgotPassword && !isAdminStaffLogin ? (
                    <>
                        {/* Tab Header */}
                        <div className="accountMenu-switchTab">
                            <button
                                className={activeTab === 'login' ? 'accountMenu-activeTitle' : 'accountMenu-title'}
                                onClick={() => setActiveTab('login')}
                            >
                                Sign In
                            </button>
                            <button
                                className={activeTab === 'signup' ? 'accountMenu-activeTitle' : 'accountMenu-title'}
                                onClick={() => setActiveTab('signup')}
                            >
                                Sign Up
                            </button>
                        </div>

                        {/*Login*/}
                        {activeTab === 'login' && (
                            <div className="login-form">
                                <div className="form-input-container">
                                    <input type="email" placeholder="Email" className="form-input" />
                                </div>
                                <PasswordInput placeholder="Password" />
                                <div className="additional-links">
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        showForgotPassword();
                                    }}>Forgot Password?</a>
                                    <br />
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        showAdminStaffLogin();
                                    }}>Admin/Staff Login</a>
                                </div>
                                <div className="form-button-container">
                                    <button className="form-button" onClick={onClose}>Login</button>
                                </div>
                            </div>
                        )}

                        {/*Sign Up*/}
                        {activeTab === 'signup' && (
                            <div className="signup-form">
                                <div className="form-input-container">
                                    <input type="text" placeholder="First Name" className="form-input" />
                                </div>
                                <div className="form-input-container">
                                    <input type="text" placeholder="Last Name" className="form-input" />
                                </div>
                                <div className="form-input-container">
                                    <input type="email" placeholder="Email" className="form-input" />
                                </div>
                                <div className="form-input-container">
                                    <input type="tel" placeholder="Phone Number" className="form-input" />
                                </div>
                                <PasswordInput placeholder="Password" />
                                <PasswordInput placeholder="Confirm Password" />
                                <div className="checkbox-container">
                                    <input type="checkbox" id="terms" />
                                    <label htmlFor="terms" className="form-checkbox-label">I agree to all terms</label>
                                </div>
                                <div className="form-button-container">
                                    <button className="form-button" onClick={onClose}>Sign Up</button>
                                </div>
                            </div>
                        )}
                    </>
                ) : isAdminStaffLogin ? (
                    // Admin&Staff Login Form
                    <div className="admin-staff-login-form">
                        <div className="accountMenu-switchTab">
                            <button
                                className={adminStaffActiveTab === 'admin' ? 'accountMenu-activeTitle' : 'accountMenu-title'}
                                onClick={() => setAdminStaffActiveTab('admin')}
                            >
                                Admin
                            </button>
                            <button
                                className={adminStaffActiveTab === 'staff' ? 'accountMenu-activeTitle' : 'accountMenu-title'}
                                onClick={() => setAdminStaffActiveTab('staff')}
                            >
                                Staff
                            </button>
                        </div>

                        {adminStaffActiveTab === 'admin' && (
                            <AdminStaffLoginForm role="Admin" onClose={onClose} />
                        )}

                        {adminStaffActiveTab === 'staff' && (
                            <AdminStaffLoginForm role="Staff" onClose={onClose} />
                        )}

                        <div className="back-to-login-link">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                backToLogin();
                            }}>Back to User Login</a>
                        </div>
                    </div>
                ) : (
                    //Forgot Password Form
                    <div className="forgot-password-form">
                        <p>
                            <h2>Forgot Password</h2>
                            Enter the email you used to register and we'll send you a link to reset your password.
                        </p>
                        <div className="form-input-container">
                            <input type="email" placeholder="Email" className="form-input" />
                        </div>
                        <div className="form-button-container">
                            <button className="form-button" onClick={() => { /* handle forgot password logic,update later */ }}>Send</button>
                        </div>
                        <div className="back-to-login-link">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                backToLogin();
                            }}>Back to Login</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginModal;