import { useState } from 'react';
import './Nav.css';

const Nav  = ({setIsCast, setIsEpisode}) => {


    return(
        <div className='nav'>
          <img src='logo-pied-piper.png' className="appLogo" alt="logo" />
          <button id='cast' className='actBtn' onClick={() => {setIsCast(true); setIsEpisode(false)}}>Cast</button>
          <button id='episodes' className='inactBtn' onClick={() =>{setIsEpisode(true); setIsCast(false)} }>Episodes</button>  
        </div>
    );
};

export default Nav;