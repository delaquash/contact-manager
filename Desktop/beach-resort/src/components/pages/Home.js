import React from 'react';
import Hero from '../Hero';
import Banner from './Banner';
import '../css/Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
       <Hero hero="defaultHero">
            <Banner title="Luxurious Rooms"
           subtitle="Deluxe Rooms starting at #25,000">
            <Link  to="/rooms" className="btn-primary">
                    Our Rooms
            </Link>
       </Banner>
       </Hero>



    )
}

export default Home;
