import React from 'react';
import './Card.css';

const Card  = ({ data, isCast, isEpisode}) => {
    if (isCast) {
        var gender = data.person.gender === "Female" ? "fa fa-female gender" : "fa fa-male gender";
    };

    return(
        <div className="cardsWrapper">
            {isCast && (
                <div className="cards">
                    <div className="blockImage">
                        <img alt='character img' src={ data.person.image.medium }></img>
                        <i className={gender}></i>
                        <a className="characterName" href={data.person.url} target="_blank">
                            <p>{data.person.name}</p>
                        </a> 
                    </div>
                    <div className="cardInfo">
                        <ul >
                            <li>Country: {data.person.country.name}</li>
                            <li>Birthday: {data.person.birthday}</li>
                            <a href={data.character.url} target="_blank">
                                <li>Character: {data.character.name}</li>
                            </a>
                        </ul>
                    </div>
                </div>
            )}

            {isEpisode && (
                <div className="cards">
                    <div className="blockImage">
                        <img alt='img' src={ data.image.medium }></img>
                        <a className="characterName" href={data.url} target="_blank">
                            <p>{data.name}</p>
                        </a> 
                    </div>
                    <div className="cardInfo">
                        <ul >
                            <li>Summary: {data.summary}</li>
                            <li>S{data.season}, E{data.number}</li>
                            <li>Airtime: {data.airtime}</li>
                        </ul>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Card;

/**
 * 
 */