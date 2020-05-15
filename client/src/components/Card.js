import React from 'react';
import '../styles/Card.scss';
import Img from '../img/test-img.jpg'

function Card() {
    return(
        <div className="card">
            <img className = "img" src={Img} alt="news-image"/>
            <h5 className = "title">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua. Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
            <p className = "link">Link</p>
        </div>
    )
}

export default Card;