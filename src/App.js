import './App.css';
import useApiData from './hooks/useApiData';
import Nav from './components/Nav/Nav';
import Casts from './components/Casts/Casts';


const App = () => {
    const apiData = useApiData();
    console.log(apiData);
    
    return (
      <div className="App">
        <Nav></Nav>
        <Casts data={apiData}></Casts>
      </div>
    );

}

  

export default App;
