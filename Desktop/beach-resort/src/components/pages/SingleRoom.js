import React, { Component } from 'react';
import defaultImg from '../images/defaultImg.jpg';
import Hero from '../Hero';
import Banner from '../pages/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from './../../context';
import '../css/SingleRoom.css';

 class SingleRoom extends Component {
     constructor(props) {
         super(props)
        //  console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg
        };
     }

    //  componentDidMount () {

    //  }
     static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
              <div className="error">
                <h3>Romm does not exist....</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to Rooms Page
                </Link>
              </div>
            );
        }
          const {
                name,
                description,
                capacity,
                size,
                price,
                extras,
                breakfast,
                pets,
                images
            } = room;
        return (
            <Hero hero="roomsHero">
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </Hero>
        )
    }
}

export default SingleRoom ;
