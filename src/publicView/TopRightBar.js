import React, { useState } from 'react';

import { MdLanguage } from "react-icons/md";

const TopRightBar = () => {
    const [language, setLanguage] = React.useState('English');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
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
            <div className="account-info">
                {isLoggedIn ? (
                    <span>Hi, {username}</span>
                ) : (
                    <a href="#" onClick={handleLogin}>Login</a>
                )}
                {isLoggedIn && <a href="#" onClick={handleLogout}>Logout</a>}
            </div>
        </div>
    );
};

export default TopRightBar;