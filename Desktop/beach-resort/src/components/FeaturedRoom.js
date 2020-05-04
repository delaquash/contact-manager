import React, { Component } from 'react';
import { RoomContext } from "../context";

 class FeaturedRooms extends Component {
     static contextType = RoomContext;
    render() {
        const { FeaturedRooms: rooms } = this.context;
        console.log(rooms);
        return (
            <div>


            </div>
        )
    }
}

export default FeaturedRooms;
