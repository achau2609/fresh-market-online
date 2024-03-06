import React from "react";
import ItemsCarousel from "./publicView/ItemsCarouse";
import Banner from "./publicView/Banner";
 
const Home = () => {
    return (
        <div>
            <Banner />
            <ItemsCarousel />
        </div>
    );
};
 
export default Home;