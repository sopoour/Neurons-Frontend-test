import React from 'react';
import {useState, useEffect, useRef} from 'react';


const useClickModal = () => {
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

    return {isOpen, setIsOpen, buttonRef, dropdownRef};
};

export default useClickModal;