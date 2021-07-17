import React from 'react';
import Card from './card';

const Cards = ({ data }) => {
    return(
        <div>
            {data.map(item =>(
                < Card data = {item}></Card>
        ))}

        </div>
        
    );
};

export default Cards;