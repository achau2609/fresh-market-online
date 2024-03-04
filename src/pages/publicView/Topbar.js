import React from "react";
import Header from './Header';
import Navigation from './Navigation';
import TopRightBar from './TopRightBar';
import '../../css/Public.css'
import { Outlet } from "react-router-dom";

const Topbar = () => {
    
    return (
        <div className="App">
            <TopRightBar />
            <Header />
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Topbar;