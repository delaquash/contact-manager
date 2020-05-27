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
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
    // Getting unique types
    let types = getUnique(rooms, 'type');

    // Adding all unique types
    types = ['all', ...types];

    // Lets map to JSX for type of room
    types = types.map((item, index) => {
        return <option value={item}
         key={index}>
         {item}
         </option>
    })
    // Mapping out various capacity per room
    let people = getUnique(rooms, "capacity")
    people = people.map((item, index) => {
        return <option key={index} value={item}>
            {item}
        </option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
                <form className="filter-form">
                        {/* Selecting room types */}
                            <div className="form-group">
                                <label htmlFor="type">room type</label>
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
                        {/* Selecting number of guest per room */}
                            <div className="form-group">
                                <label htmlFor="capacity">Guest</label>
                                    <select
                                        name="capacity"
                                        id="capacity"
                                        value={capacity}
                                        className="form-control"
                                        onChange={handleChange}
                                        >
                                        {people}
                                    </select>
                            </div>
                        {/* Selecting Room types */}
                        {/* Room Price */}
                        <div className="form-group">
                            <label htmlFor="price">Room Price ${price}</label>
                                <input
                                type="range"
                                name="price"
                                min={minPrice}
                                max={maxPrice}
                                id="price"
                                value={price}
                                onChange={handleChange}
                                className="form-control"
                                />
                        </div>
                        {/* End of Room Price */}
                        {/* Selecting room base on size */}
                            <div className="form-group">
                                <label htmlFor="size">Room Size</label>
                                <div className="size-inputs">
                                    <input
                                    type="number"
                                    name="minSize"
                                    id="size"
                                    value={minSize}
                                    onChange={handleChange}
                                    className="size-input"
                                    />
                                    <input
                                    type="number"
                                    name="maxSize"
                                    id="size"
                                    value={maxSize}
                                    onChange={handleChange}
                                    className="size-input"
                                    />
                                </div>
                            </div>
                        {/* End of room selection according to size */}
                </form>
        </section>
    )
}

export default RoomFilter;
