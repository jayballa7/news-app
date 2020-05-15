import React from 'react';
// import '../styles/MainPage.scss';
import Img from '../img/test-img.jpg'

function Card(boxClass) {
    return(
        <div className={boxClass}>
        <div className="card--profile">
            <img className = "img" src={Img} alt="news-image"/>
        </div>
        <div className="card__text">
            <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
            <div class="separator"></div>
            <div class="card--footer"><button class="btn">Link</button></div>
        </div>
    </div>
    )
}

export default Card;