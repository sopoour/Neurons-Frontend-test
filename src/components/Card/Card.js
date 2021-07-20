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
                        <img alt='character_img' src={ data.person.image.medium }></img>
                        <i className={gender}></i>
                        <a className="name" href={data.person.url} target="_blank">
                            <p>{data.person.name}</p>
                        </a> 
                    </div>
                    <div className="cardInfo">
                        <ul >
                            <li><b>Country: </b>{data.person.country.name}</li>
                            <li><b>Birthday: </b>{data.person.birthday}</li>
                            <a href={data.character.url} target="_blank">
                                <li><b>Character: </b>{data.character.name}</li>
                            </a>
                        </ul>
                    </div>
                </div>
            )}

            {isEpisode && (
                <div className="cards">
                    <div className="blockImage">
                        <img alt='movie_img' src={ data.image.medium }></img>
                        <p className="series">S{data.season}/E{data.number}</p>
                        <a className="name" href={data.url} target="_blank">
                            <p>{data.name}</p>
                        </a> 
                    </div>
                    <div className="cardInfo episode">
                        <ul >
                            <li className='summary'><b>Summary: </b>{data.summary.replace('<p>', '').replace('</p>', '')}</li>
                            <li></li>
                            <li><b>Airtime: </b>{data.airtime}</li>
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