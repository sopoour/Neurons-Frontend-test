import './App.css';
import {useState} from 'react';
import useApiData from './hooks/useApiData';
import Nav from './components/Nav/Nav';
import Casts from './components/Casts/Casts';
import Episodes from './components/Episodes/Episodes';


const App = () => {
    const {castData, episodeData} = useApiData();

    const [isCast, setIsCast] = useState(true);
    const [isEpisode, setIsEpisode] = useState(false);

    console.log(castData);
    console.log(episodeData)
    
    return (
      <div className="App">
        <Nav
        setIsCast={setIsCast}
        setIsEpisode={setIsEpisode}></Nav>
        {isCast && (
          <Casts 
            data={castData}
            isCast={isCast}
            isEpisode={isEpisode}>
          </Casts>
        )}
        {isEpisode && (
          <Episodes 
            data={episodeData}
            isCast={isCast}
            isEpisode={isEpisode}
          ></Episodes>
        )}
        
      </div>
    );

}

  

export default App;
