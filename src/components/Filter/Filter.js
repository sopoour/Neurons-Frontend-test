import React from 'react';
import './Filter.css'
import useClickModal from '../../hooks/useClickModal';


const Filter = ({ data, setFilter, filter, handleUpdate }) => {
    
    //Call custom hook for click behavior
    const {isOpen, setIsOpen, buttonRef, dropdownRef} = useClickModal();

    //helper function to display only unique names of filter within select
    const filterUnique = (dataPoint) => {
        return Array.from(new Set (dataPoint)).map(c => (
            <option key={c} value={c}>
                {c}
            </option>
        ))
    }

    return (
        <div className="filterWrapper">
            {/* when clicking on button change isOpen to true */}
            <button className="filterButton" ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
                <i class="fa fa-th"></i> Filter 
            </button>
            {/* when isOpen=true show filterModal*/}
            {isOpen && (
                <div ref={dropdownRef} className="filterModal">
                    <h4>Country</h4>
                    <select value={filter.country} onChange={event => setFilter({country: event.target.value})}>
                        <option value=""> Select Country... </option>
                        {/* unique set of filter values*/}
                        {filterUnique(data.map(value => value.person.country.name))}
                    </select>
                    <h4>Gender</h4>
                    <select value={filter.gender} onChange={event => setFilter({gender: event.target.value})}>
                        <option value=""> Select Gender... </option>
                        {/* unique set of filter values*/}
                        {filterUnique(data.map(value => value.person.gender))}
                    </select>
                    <div className="filterModalActions">
                        {/*when clicking on select button change isOpen back to false so modal closes*/}
                        <button onClick={handleUpdate}> 
                        Update
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;
