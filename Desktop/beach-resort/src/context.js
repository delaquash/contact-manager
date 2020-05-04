import React, { Component } from 'react';
import items from './data';

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
        let featuredRooms = rooms.filter(room => room.featured === true);

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        });
    }

    formatData(items) {
        let temptItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url);


        // })
        let rooms = { ...items.field,  images, id };
        return rooms;
     });
     return temptItems;
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext};
