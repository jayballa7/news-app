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
                            <h3 className="card--header">Choose 3 topics you are interested in:</h3>
                            <hr></hr>
                        <ul className = "checkbox">
                            <li>
                                <label className="category">General
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>
                            <li>
                                <label className="category">Politics
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>

                            <li>
                                <label className="category">Art
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>

                            <li>
                                <label className="category">Science/Tech
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>

                            <li>
                                <label className="category">Entertainment
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>

                            <li>
                                <label className="category">Sports
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>

                            <li>
                                <label className="category">Business
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>

                            <li>
                                <label className="category">Travel
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>

                            <li>
                                <label className="category">Food
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>

                            <li>
                                <label className="category">Style
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                </label>
                            </li>
                            <input className = "save" type="submit" value="Save"/>
                        </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Settings;