import React from 'react';

const Card  = ({ data }) => {
    return(
        <div>
            <img width={200} src={ data.character.image.medium }></img>
            
        </div>
        
    );
};

export default Card;