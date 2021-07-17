import {useState, useEffect} from 'react';

const useApiData = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                'https://api.tvmaze.com/shows/143/cast'
            );
            const data = await response.json()
            //Update apiData state with the data we get from API
            setApiData(data);
        }) 
        //call function right away
        ();
        //this allows me to use the lifecycle method inside of a functional component
    }, []);

    return apiData;
};

export default useApiData;