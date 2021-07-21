import './SearchBar.css'

const SearchBar  = ({ searchTerm, handleChange }) => {

    return(
        <div>
            <input 
                type='text' 
                placeholder='&#xf002; Search...'
                //searchTerm saves the data from search input on every occurance of change event
                value={searchTerm}
                //handleChange takes event object as arg and set current value of form to searchTerm state using setSearchTerm method
                onChange={handleChange}>
            </input>
        </div>
        
    );
};

export default SearchBar;