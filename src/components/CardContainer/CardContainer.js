import React from 'react';
import Card from '../Card/Card';
import "./CardContainer.css"

const CardContainer = ({ data }) => {
    return(
        <div className="cardContainer">
            {data.map(item =>(
                < Card data = {item}></Card>
        ))}
        </div>
        
    );
};

export default CardContainer;