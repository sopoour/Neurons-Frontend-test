import {useState, useEffect} from 'react';

const useApiData = () => {
    //TODO: create one const for castData and one for episodeData
    
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


