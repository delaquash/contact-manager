import React, { Component } from 'react';
import defaultImg from '../images/defaultImg.jpg';
import Hero from '../Hero';
import Banner from '../pages/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from './../../context';
import StyledHero from '../StyledHero';
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
            const [mainImg, ...defaultImg] = images;
        return (
                    <>
                    <StyledHero img={images[0] || this.state.defaultImg}>
                        <Banner title={`${name} room`}>
                            <Link to="/rooms" className="btn-primary">
                                Back to rooms
                            </Link>
                        </Banner>
                    </StyledHero>
                       <section className="single-room">
                            <div className="single-room-images">
                                {defaultImg.map((item, index) => {
                                    return <img key={index}
                                    src={item} alt={name} />
                                })}
                            </div>
                            <div className="single-room-info">
                                <article className="desc">
                                <h3>Details</h3>
                                    <p>{description}</p>
                                </article>
                                <article className="info">
                                <h3>Info</h3>
                                <h6>price: ${price}</h6>
                                <h6>Size: ${size} Squarefoot </h6>
                                <h6>max capacity : {''}
                                 {capacity > 1 ? `${capacity} people` : `${capacity} person` }
                                </h6>
                               <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                               <h6>{breakfast && 'Free Breakfast Included'}</h6>
                                </article>
                            </div>
                        </section>
                        <section className="room-extras">
                                <h6>Extras</h6>
                                <ul className="extras">
                                    {extras.map((item, index) => {
                                        return <li key={index}>-{item}</li>
                                    })}
                                </ul>
                        </section>
</>
        )
    }
}

export default SingleRoom ;
