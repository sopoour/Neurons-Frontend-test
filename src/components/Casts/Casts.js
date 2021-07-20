import React from 'react';
import './Casts.css'
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import useFilterData from '../../hooks/useFilterData';


const Casts = ({ data, isCast, isEpisode }) => {

    //call custom hook to process search filter
    const {result, searchTerm, filter, setFilter, handleUpdate, handleChange} = useFilterData(data);
    console.log('Casts: ' + data)
    console.log("Current filter: " + filter.country + "& " + filter.gender)
    
    return(
        
        <div className="castsContainer">
            <div className="searchFilter">
                <SearchBar 
                    searchTerm={searchTerm} 
                    handleChange={handleChange}>
                </SearchBar>
                <Filter 
                    data={result}
                    filter={filter}
                    setFilter={setFilter}
                    handleUpdate={handleUpdate}>
                </Filter>
            </div>
            <CardContainer 
                data={result}
                isCast={isCast}
                isEpisode={isEpisode}>
            </CardContainer>
        </div>
        
    );
};

export default Casts;