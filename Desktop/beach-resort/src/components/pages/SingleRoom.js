import React, { Component } from 'react';
import defaultImg from '../images/defaultImg.jpg';
import Hero from '../Hero';
import Banner from '../pages/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from './../../context';

 class SingleRoom extends Component {
     constructor(props) {
         super(props)
         console.log(this.props);
     }

     componentDidMount () {

     }
    render() {
        return (
            <div>
                <h3>This is a single room page</h3>
            </div>
        )
    }
}

export default SingleRoom ;
