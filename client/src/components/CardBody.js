import React from 'react';
import '../styles/CardBody.scss';

function CardBody(props) {
    return (
        <div>
        <div className="card--profile">
        <img className = "img" src={props.urlImage1} alt="news-image1"/>
        </div>
        <div className="card__text">
        <h5 className="card--header">{props.title}</h5>
        <div className="separator"></div>
        <div className="card--footer"><button className="btn">Link</button></div>

        </div>
        </div>
    )
}

export default CardBody;