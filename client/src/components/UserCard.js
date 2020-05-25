import React from 'react';
import '../styles/UserCard.scss';
import { Link } from "react-router-dom";
import Img from '../img/test-img.jpg';

function UserCard() {
    return(
        <div className="card">
                <div className="profile">
                    <div className="card--profile">
                        <img className = "profile-phto" src={Img} alt="profile-photo"/>
                    </div>
                    <div className="card__text">
                        <h5 className="card--header">Username</h5>
                        <div class="card--footer"><p><Link to= '/login' className = "signupLink">Log Out</Link></p></div>
                    </div>
                </div>
        </div>
    )
}

export default UserCard;