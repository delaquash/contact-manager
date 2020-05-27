import React, { Component } from 'react';
import items  from './data';

const RoomContext = React.createContext();

 class RoomProvider extends Component {
     state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
     };

    //  Getting data
    componentDidMount() {
        let rooms = this.formatData(items);
        // console.log(rooms);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item =>item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
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
// This is the link for features of the room that appears in the features section link
    getRoom = slug => {
        let tempRooms = [ ...this.state.rooms ];
        const room = tempRooms.find(room => room.slug === slug);
            return room;
    }

    handleChange= e => {
        const target = e.target;
        const name = e.target.type;
        const value = e.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        },
        this.filterRooms
        );
    };
    // Filtering out various spect of the rooms
    filterRooms = () => {
      let { rooms, type, capacity, price, minPrice, minSize, maxSize, breakfast, pets } = this.state;
    //   All the rooms
      let tempRooms = [...rooms];

    //   Filtering by the types of rooms
      if(type !== "all"){
          tempRooms=  tempRooms.filter(room => room.type === type );
      }

    //   Filtering by capacity
    if(capacity !== 1 ){
        tempRooms = tempRooms.filter (room => room.capacity >= capacity);
    }

    // Filtering by price ranges
        tempRooms = tempRooms.filter(room => room.price <= price)

    //Filtering by the size of the room
    tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize);
      this.setState({
          sortedRooms: tempRooms
      });
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

function withRoomConsumer(Component){
    return  function ConsumerWrapper(props){
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
}

export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer };
