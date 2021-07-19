import React from 'react';
import './Casts.css'
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import {useState, useEffect} from 'react';
import useSearchData from '../../hooks/useSearchData';
import useClickModal from '../../hooks/useClickModal';

const Casts = ({ data }) => {

    //call custom hook to process search filter
    const {searchResults, searchTerm, handleChange} = useSearchData(data);

    const {isOpen, setIsOpen, buttonRef, dropdownRef} = useClickModal();

    const [filter, setFilter] = useState({
        country: '',
        gender: '',
        alive: [true, false],
        bday: ''
    });

    const [filterResults, setFilterResults] = useState([]);

    const handleUpdate = event => {
        setIsOpen(false);
        setFilter({
            country: event.target.value,
            
        })
    };
    
    useEffect(() => {
        (async () => {
            const results = await data.filter(value => {
                return (
                    value.person.country.name.toLowerCase().includes(filter.country.toLowerCase())
                )
            }
                    
            );
            //then the filtered list (results) is set on the searchResults state by using the setSearchResults method
            setFilterResults(results);
        })
      //filter through existing array casts and check if the cast in the casts list includes searchTerm
        ();
    }, [data, filter]);

    const dataSource = () => {
        return filterResults.length == 0 ? filterResults : searchResults;
    }

    console.log("Current dataSource:" + dataSource().map(value => value.person.name))
    
    return(
        
        <div className="castsContainer">
            <div className="searchFilter">
                <SearchBar 
                    searchTerm={searchTerm} 
                    handleChange={handleChange}>
                </SearchBar>
                <Filter 
                    data={data}
                    setFilter={setFilter}
                    filter={filter}
                    handleUpdate={handleUpdate}>
                </Filter>
            </div>
            
            <CardContainer data={filterResults}></CardContainer>
        </div>
        
    );
};

export default Casts;