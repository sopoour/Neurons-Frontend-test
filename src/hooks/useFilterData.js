import {useState, useEffect} from 'react';
import useClickModal from './useClickModal';

const useFilterData = (data) => {
    const {setIsOpen} = useClickModal();

    const [searchTerm, setSearchterm] = useState ('');
    const [filter, setFilter] = useState({
      country: '',
      gender: '',
      alive: [true, false],
      bday: ''
    });
    const [result, setResult] = useState([]);

    const handleChange = event =>{
      setSearchterm(event.target.value);
    };

    const handleUpdate = (event) => {
      setIsOpen(false);
      setFilter({
        country: event.target.value,
        gender: event.target.value
      })
    };

    /*
    * 1. useEffect hook executes whenever dependency of method gets changed
    * 2. dependency searchTerm gets changed on every input by user
    * 3. this in turn executes function in first argument (=results)
    */
    useEffect(() => {
      (async () => {
          const results = await data.filter(value => {
              return (searchTerm 
                  //search for either character or actor/actress name
                  ? (value.character.name.toLowerCase().includes(searchTerm.toLowerCase())
                  || value.person.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) 
                  : (filter.country
                      ? value.person.country.name.toLowerCase().includes(filter.country.toLowerCase())
                      : (filter.gender
                          ? value.person.gender.toLowerCase().includes(filter.gender.toLowerCase())
                          : data))
              )
          }           
          );
          //then the filtered list (results) is set on the result state by using the setResult method
          setResult(results);
      })
      ();
  }, [data, filter.country, filter.gender, searchTerm]);

    return {result, searchTerm, filter, setFilter, handleUpdate, handleChange, setIsOpen};
};

export default useFilterData;