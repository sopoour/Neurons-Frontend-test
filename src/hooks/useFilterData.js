import {useState, useEffect} from 'react';
import useClickModal from './useClickModal';

const useFilterData = (data) => {
    const {setIsOpen} = useClickModal();

    const [searchTerm, setSearchterm] = useState ('');
    const [filter, setFilter] = useState({
      country: '',
      gender: '',
      alive: '',
      bday: ''
    });
    const [result, setResult] = useState([]);

    const handleChange = event =>{
      setSearchterm(event.target.value);
    };

    //Problem: somehow handleUpdate doesn't work or just doesn't get called correctly (need to dig more into it)
    const handleUpdate = (event) => {
      setIsOpen(false);
      setFilter({
        country: event.target.value,
        gender: event.target.value
      })
    };

    /* How useEffect works:
    * 1. useEffect hook executes whenever dependency of method gets changed
    * 2. dependency searchTerm gets changed on every input by user
    * 3. this in turn executes function in first argument (=results)
    */

    //Limitation: right now only one filter at at time useable (search || country filter || gender filter)
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
                          //Problem: for some reason you can only filter after Female and not Male; for Male it shows all
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