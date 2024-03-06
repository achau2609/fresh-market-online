import React, { useState } from 'react';
import LoginModal from './LoginModal';
import { MdLanguage } from "react-icons/md";
import '../../css/Public.css'

const TopRightBar = () => {
    const [language, setLanguage] = React.useState('English');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [showModal, setShowModal] = useState(false); // for login modal

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleAccountInfoClick = () => {
        if (isLoggedIn) {
            handleLogout();
        } else {
            setShowModal(true);
        }
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        setUsername('Username'); // Replace with actual login logic later
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <div className="top-right-bar">
            {/* Language */}
            <div className="language-selector">
                <MdLanguage />
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                    </select>
            </div>

            {/* Login */}
            <div className="account-info" onClick={handleAccountInfoClick}>
                <span className="login-logout-text">
                    {isLoggedIn ? `Hi, ${username}` : 'Login'}
                </span>
            </div>

            {/* Modal */}
            {showModal && <LoginModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default TopRightBar;