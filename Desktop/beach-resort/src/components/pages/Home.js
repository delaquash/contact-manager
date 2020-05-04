import React from 'react';
import Hero from '../Hero';
import Banner from './Banner';
import Services from '../Services';
import '../css/Home.css';
import {Link} from 'react-router-dom';
import FeaturedRooms from "../FeaturedRoom";

const Home = () => {
    return (
        <React.Fragment>
            <Hero hero="defaultHero">
            <Banner title="Luxurious Rooms"
           subtitle="Deluxe Rooms starting at #25,000">
            <Link  to="/rooms" className="btn-primary">
                    Our Rooms
            </Link>
             </Banner>
             </Hero>
             <Services />
             <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home;
