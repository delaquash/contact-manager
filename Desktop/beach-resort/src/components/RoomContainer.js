import React from 'react';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import { withRoomConsumer } from '../context';
import Loading from '../components/Loading';

const RoomContainer = ({ context }) => {
    const { loading, sortedRooms, rooms} = context;

        // <RoomConsumer>
        // {value => {

                if(loading) {
                    return (<Loading />)
                }
                return (
                  <div>
                <RoomList rooms={sortedRooms} />
                <RoomFilter rooms={rooms} />
            </div>
                )
        // }}
        // </RoomConsumer>
}

export default withRoomConsumer(RoomContainer);
