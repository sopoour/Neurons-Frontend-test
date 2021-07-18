import React from 'react';
import './Card.css';

const Card  = ({ data }) => {
    const gender = data.person.gender === "Female" ? "fa fa-female gender" : "fa fa-male gender";

    return(
        <div className="cards">
            <div className="blockImage">
                <img alt='character img' src={ data.person.image.medium }></img>
                <i className={gender}></i>
                <a className="characterName" href={data.person.url} target="_blank">
                    <p>{data.person.name}</p>
                </a> 
                
            </div>
            
        </div>
        
    );
};

export default Card;

/**
 * <div className="cardInfo">
                    <ul >
                        <li>Country: {data.person.country.name}</li>
                        <li>Birthday: {data.person.birthday}</li>
                        <a href={data.character.url} target="_blank">
                            <li>Character: {data.character.name}</li>
                        </a>
                    </ul>

                </div>
 */