import React, { useState, useEffect } from 'react';
import './SearchBar.css'
import useSearchData from '../../hooks/useSearchData';

const SearchBar  = ({ searchTerm, handleChange }) => {

    return(
        <div>
            <input 
                type='text' 
                placeholder='&#xf002; Search...'
                //searchTerm saves the data from search input on every occurance of change event
                //handleChange takes event object as arg and set current value of form to searchTerm state using setSearchTerm method
                value={searchTerm}
                onChange={handleChange}>
            </input>
        </div>
        
    );
};

export default SearchBar;