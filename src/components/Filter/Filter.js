import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './Filter.css'

const Filter = () => {
    //FILTER - START
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(undefined);
    const buttonRef = useRef(undefined);

    //TRY TO MOVE THIS INTO OWN CUSTOM HOOK: useClickOutside
    //whenever a user clicks outside of an opened filter or on the filter button, the filter should close:
    useEffect(() => {
        const handleClick = event => {
          const isDropdownClicked =
            dropdownRef.current && dropdownRef.current.contains(event.target);
          const isButtonClicked =
            buttonRef.current && buttonRef.current.contains(event.target);
      
          
     if (isDropdownClicked || isButtonClicked) {
            // We would do nothing if the ref is undefined or the user clicks on the menu.
            return;
          }
          // Or else close the menu.
          setIsOpen(false);
        };
         
          document.addEventListener("mousedown", handleClick); 
          document.addEventListener("touchstart", handleClick); 
      
        // cleanup
        return () => {
          document.removeEventListener("mousedown", handleClick);  
          document.removeEventListener("touchstart", handleClick);   
        };
      }, [dropdownRef, buttonRef]);
     
    const handleSelect = () => {
        setIsOpen(false);
    };

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
