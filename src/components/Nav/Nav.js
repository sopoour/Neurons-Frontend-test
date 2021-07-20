import { useState } from 'react';
import './Nav.css';

const Nav  = ({setIsCast, setIsEpisode}) => {


    return(
        <div className='nav'>
          <img src='logo-pied-piper.png' className="appLogo" alt="logo" />
          <button id='cast' className='actBtn' onClick={() => {
            setIsCast(true); 
            setIsEpisode(false)
            document.getElementById("cast").className="actBtn";
            document.getElementById('episodes').className="inactBtn"}}>Cast</button>
          <button id='episodes' className='inactBtn' onClick={() =>{
            setIsEpisode(true); 
            setIsCast(false)
            document.getElementById("episodes").className="actBtn";
            document.getElementById('cast').className="inactBtn"} }>Episodes</button>  
        </div>
    );
};

export default Nav;