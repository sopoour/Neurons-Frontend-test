import React from 'react';
import './Casts.css'
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import {useState, useEffect} from 'react';
import useSearchData from '../../hooks/useSearchData';

const Casts = ({ data }) => {

    const {searchResults, searchTerm, handleChange} = useSearchData(data);

    return(
        
        <div className="castsContainer">
            <div className="searchFilter">
                <SearchBar 
                    searchTerm={searchTerm} 
                    handleChange={handleChange}>
                </SearchBar>
                <Filter></Filter>
            </div>
            
            <CardContainer data={searchResults}></CardContainer>
        </div>
        
    );
};

export default Casts;