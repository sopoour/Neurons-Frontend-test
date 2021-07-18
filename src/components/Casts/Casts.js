import React from 'react';
import './Casts.css'
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import {useState, useEffect} from 'react';
//import useSearchData from '../../hooks/useSearchData';

const Casts = ({ data }) => {

    /**
     * PROBLEM:
     * I wanted to create a custom hook for the search but I struggled where the states should live and how to pass on the different 
     * state updates (see hooks/useSearchData)
     */

    //{searchResults} = useSearchData(data)

    // SEARCH - START
    const [searchTerm, setSearchterm] = useState ('');
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event =>{
      setSearchterm(event.target.value);
    };

    /*
    * 1. useEffect hook executes whenever dependency of method gets changed
    * 2. dependency searchTerm gets changed on every input by user
    * 3. this in turn executes function in first argument (=results)
    */
    useEffect(() => {
        (async () => {
            const results = await data.filter(value => {
                return (
                    //search for either character or actor/actress name
                    value.character.name.toLowerCase().includes(searchTerm.toLowerCase())
                    || value.person.name.toLowerCase().includes(searchTerm.toLowerCase())
                )}
            )
            //then the filtered list (results) is set on the searchResults state by using the setSearchResults method
            setSearchResults(results);
        })
      //filter through existing array casts and check if the cast in the casts list includes searchTerm
        ();
    }, [data, searchTerm]);

    return(
        
        <div className="castsContainer">
            <SearchBar 
                searchTerm={searchTerm} 
                handleChange={handleChange}>
            </SearchBar>
            <CardContainer data={searchResults}></CardContainer>
        </div>
        
    );
};

export default Casts;