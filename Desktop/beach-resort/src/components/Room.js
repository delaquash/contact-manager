import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from './images/defaultImg.jpg';
import '../components/css/Room.css';

const Room = ({ room })=>{
    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg } alt="single rooms" />
                <div className="price-top">
                    <h6>#{price}</h6>
                    <p>price per night</p>
                </div>
                <Link to={`/rooms/${slug}`}
                className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

export default Room;
