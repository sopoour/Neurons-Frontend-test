import React from 'react';
import './Casts.css'
import CardContainer from '../CardContainer/CardContainer';
import {useState, useEffect} from 'react';
//import SearchBar from '../SearchBar/SearchBar';
//import useSearchData from '../../hooks/useSearchData';

const Casts = ({ data }) => {

    /**
     * PROBLEM:
     * I wanted to create a custom hook for the search and create an own component for the
     * search bar but I struggled where the states should live and how to pass on the different 
     * state updates as well as handleChange (see hooks/useSearchData and components/SearchBar/SearchBar)
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
            const results = await data.filter(value => 
                value.character.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                //then the filtered list (results) is set on the searchResults state by using the setSearchResults method
                setSearchResults(results);
        })
      //filter through existing array casts and check if the cast in the casts list includes searchTerm
        ();
    }, [data, searchTerm]);

    // SEARCH - END

    return(
        
        <div className="castsContainer">
            <input 
                type='text' 
                placeholder='&#xf002; Search...'
                //searchTerm saves the data from search input on every occurance of change event
                //handleChange takes event object as arg and set current value of form to searchTerm state using setSearchTerm method
                value={searchTerm}
                onChange={handleChange}>
            </input>
            <div>
                <CardContainer data={searchResults}></CardContainer>
            </div>
        </div>
        
    );
};

export default Casts;