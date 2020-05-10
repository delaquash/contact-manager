import React, { Component } from 'react';
import items  from './data';

const RoomContext = React.createContext();

 class RoomProvider extends Component {
     state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
     };

    //  Getting data
    componentDidMount() {
        let rooms = this.formatData(items);
        console.log(rooms);
        let featuredRooms = rooms.filter(room => room.featured === true);

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url);


        // })
        let room = { ...item.fields,images, id };
        return room;
     });
     return tempItems;
    }
// This is for the the link for features of the room that appears in the features section link
    getRoom = slug => {
        let tempRooms = [ ...this.state.rooms ];
        const room = tempRooms.find(room => room.slug === slug);
            return room;
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext};
