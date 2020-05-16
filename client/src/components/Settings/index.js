import React from 'react';
import '../../styles/Settings.scss';
import { Link } from "react-router-dom";
import Img from "../../img/profile-img.jpg";

function Settings() {
    return(
        <div className="setting-container">
            <div className="setting-page">
                <div className="setting-card">
                    <div className="sp-cell profile-card">
                        <div className="setting-card--profile">
                            <img className = "img" src={Img} alt="profile-photo"/>
                        </div>
                        <div className="setting-card__text">
                            <h1 className="setting-card--header">Username</h1>
                            <div className = "notifications">
                                <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                                </label>
                                <p>Receive email notifications</p>
                            </div>
                            <hr></hr>
                            <div className="setting-card--footer"><p><Link to= '/' className = "delete">Delete Account</Link></p></div>
                            <div className="setting-card--footer"><p><Link to= '/login' className = "logout">Log Out</Link></p></div>
                        </div>
                    </div>

                    <div className="categories">
                        <div className="setting-card__text">
                            <h3 className="setting-card--header">Choose 3 topics you are interested in:</h3>
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
                            <input className = "save-categories" type="submit" value="Save"/>
                        </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Settings;