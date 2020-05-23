import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';
import "./css/RoomFilter.css";

// Getting all unique value
const getUnique = (items, value)=> {
    return [...new Set(items.map(item => item[value]))]
}
 const RoomFilter = ({ rooms }) =>{
     const context = useContext(RoomContext);
    //  Everything called here is coming form context i.e I destructured from context
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, breakfast, pets } = context;
    // Getting unique types
    let types = getUnique(rooms, 'type');

    // Adding all unique types
    types = ['all', ...types];

    // Lets map to JSX
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms">
                <form className="filter-form">
                {/* Selecting room types */}
                    <div className="form-group">
                        <label htmlFor="type"> room type </label>
                            <select
                            name="type"
                            id="type"
                            value={type}
                            className="form-control"
                            onChange={handleChange}
                            >
                            {types}
                            </select>
                    </div>
                {/* Selecting Room types */}
                </form>
            </Title>
        </section>
    )
}

export default RoomFilter;
