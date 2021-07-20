import { useState } from 'react';
import './Nav.css';
import logo from './logo-pied-piper.png'

const Nav  = ({setIsCast, setIsEpisode}) => {


    return(
        <div className='nav'>
          <img src={logo} className="appLogo" alt="logo" />
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