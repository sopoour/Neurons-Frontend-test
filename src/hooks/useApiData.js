import {useState, useEffect} from 'react';

const useApiData = () => {
    //TODO: create one const for castData and one for episodeData
    
    const [castData, setCastData] = useState([]);
    const [episodeData, setEpisodeData] = useState([]);

    useEffect(() => {
        (async () => {
            const responseCast = await fetch(
                'https://api.tvmaze.com/shows/143/cast'
            );
            const dataCast = await responseCast.json()
            //Update castData state with the data we get from API
            setCastData(dataCast);

            const responseEpisode = await fetch(
                'https://api.tvmaze.com/shows/143/episodes'
            );
            const dataEpisode = await responseEpisode.json()
            //Update episodeData state with the data we get from API
            setEpisodeData(dataEpisode);
        }) 
        //call function right away
        ();
        //this allows me to use the lifecycle method inside of a functional component
    }, []);


    return {castData, episodeData};
};

export default useApiData;


