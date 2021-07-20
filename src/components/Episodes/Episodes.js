import React from 'react';
import './Episodes.css'
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import useSearchData from '../../hooks/useSearchData';

const Episodes = ({ data, isCast, isEpisode }) => {
    const {searchResults, searchTerm, handleChange} = useSearchData(data);
    
    return(
        
        <div className="castsContainer">
            <SearchBar 
                searchTerm={searchTerm} 
                handleChange={handleChange}>
            </SearchBar>
            <CardContainer 
                data={searchResults}
                isCast={isCast}
                isEpisode={isEpisode}>
            </CardContainer> 
        </div>
        
    );
};

export default Episodes;