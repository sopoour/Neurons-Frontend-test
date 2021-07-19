import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './Filter.css'
import useClickModal from '../../hooks/useClickModal';

const Filter = () => {
    
    //Call custom hook for click behavior
    const {isOpen, setIsOpen, buttonRef, dropdownRef, handleSelect} = useClickModal();

    return (
        <div className="filterWrapper">
            {/* when clicking on button change isOpen to true */}
            <button className="filterButton" ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
                <i class="fa fa-th"></i> Filtering 
            </button>
            {/* when isOpen true show filterModal*/}
            {isOpen && (
                <div ref={dropdownRef} className="filterModal">
                    <div> 
                        <p>Dropdown content goes here</p>
                        <div className="filterModalActions">
                            {/*when clicking on select button change isOpen back to false so modal closes*/}
                            <button onClick={() => handleSelect()}> 
                            Select
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;
