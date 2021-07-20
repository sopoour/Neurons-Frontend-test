import './App.css';
import {useState} from 'react';
import useApiData from './hooks/useApiData';
import Nav from './components/Nav/Nav';
import Casts from './components/Casts/Casts';
import Episodes from './components/Episodes/Episodes';


const App = () => {
    const apiData = useApiData();
    console.log(apiData);

    const [isCast, setIsCast] = useState(true);
    const [isEpisode, setIsEpisode] = useState(false);
    
    return (
      <div className="App">
        <Nav
        setIsCast={setIsCast}
        setIsEpisode={setIsEpisode}></Nav>
        {isCast && (
          <Casts data={apiData}></Casts>
        )}
        {isEpisode && (
          <Episodes data={apiData}></Episodes>
        )}
        
      </div>
    );

}

  

export default App;
