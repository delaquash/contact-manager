import React, { Fragment }from 'react';
import Hero from '../Hero';
import Banner from '../pages/Banner';
import '../css/Rooms.css';
import {Link} from 'react-router-dom';
import RoomContainer from '../RoomContainer';

 const Rooms =()=> {
    return (
        <Fragment>
            <Hero hero="roomsHero">
                    <Banner title="Our Rooms">
                        <Link to="/" className="btn-primary">
                            Return Home
                        </Link>
                    </Banner>
                </Hero>
                <RoomContainer />
        </Fragment>
    )
}

export default Rooms;
