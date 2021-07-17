import React, { useState } from 'react';
import './App.css';
import Cards from './components/cards';
import useApiData from './components/useApiData';

const casts = [
  'Anna',
  'Paul',
  'Joe',
  'Lisa'
]

const App = () => {
    const apiData = useApiData();
    console.log(apiData);
    /**
     * SEARCH
     */
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
    React.useEffect(() => {
      //filter through existing array casts and check if the cast in the casts list includes searchTerm
      const results = apiData.filter(value => 
        value.character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        //then the filtered list (results) is set on the searchResults state by using the setSearchResults method
        setSearchResults(results);
    }, [apiData, searchTerm])
    
    return (
      <div className="App">
        <nav className="nav">
          <table>
            <tr className='navTop'>
              <td>
                <img src='logo-pied-piper.svg' className="appLogo" alt="logo" />
              </td>
              <td>
                <button className='actBtn'>Cast</button>
              </td>
              <td>
                <button className='inactBtn'>Episodes</button>
              </td>
            </tr>
          </table>
          <input 
            type='text' 
            placeholder='&#xf002; Search...'
            //searchTerm saves the data from search input on every occurance of change event
            //handleChange takes event object as arg and set current value of form to searchTerm state using setSearchTerm method
            value={searchTerm}
            onChange={handleChange}>
          </input>
        </nav>

        <div>
          < Cards data={searchResults}></Cards>
        </div>
      </div>
    );

}

  

export default App;
