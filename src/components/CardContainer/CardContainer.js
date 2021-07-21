import React from 'react';
import Card from '../Card/Card';
import "./CardContainer.css"

const CardContainer = ({ data, isCast, isEpisode }) => {
    return(
        <div className="cardContainer">
            {/*map data to each card*/}
            {data.map(item =>(
                < Card 
                    data = {item}
                    isCast={isCast}
                    isEpisode={isEpisode}></Card>
        ))}
        </div>
        
    );
};

export default CardContainer;