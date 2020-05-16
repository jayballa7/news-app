import React from 'react';
import '../../styles/Settings.scss';
import { Link } from "react-router-dom";
import Img from "../../img/profile-img.jpg";

function Settings() {
    return(
        <div className="container">
            <div className="mainpage">
                <div className="card">
                    <div className="mp-cell profile-card">
                        <div className="card--profile">
                            <img className = "img" src={Img} alt="profile-photo"/>
                        </div>
                        <div className="card__text">
                            <h1 className="card--header">Username</h1>
                            <div className="separator"></div>
                            <div className="card--footer"><p><Link to= '/' className = "delete">Delete Account</Link></p></div>
                            <div className="card--footer"><p><Link to= '/login' className = "logout">Log Out</Link></p></div>
                        </div>
                    </div>

                    <div className="categories">
                        <div className="card__text">
                            <h1 className="card--header">Choose 3 topics you are interested in:</h1>

                            <label className="category">General
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="category">Politics
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="category">Art
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="category">Science and Tech
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label> 

                            <label className="category">Entertainment
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label> 


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Settings;