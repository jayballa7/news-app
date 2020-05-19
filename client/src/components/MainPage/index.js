import React from 'react';
import '../../styles/MainPage.scss';
// import '../../styles/UserCard.scss';
import Img from "../../img/test-img.jpg";
import '../../styles/Variables.scss';
import { Link} from "react-router-dom";

function MainPage(props) {
    return(
        <div className="container">
            <div className="mainpage">
            <div className="card">
                <div className="mp-cell header">
                    <div className="mp-item">
                        <h1 data-heading="NewsFlash">NewsFlash</h1>
                    </div>
                </div>
                <div className="mp-cell username">
                <div className="card__text">
    <h3 className="card--header">Welcome {props.email}</h3>
                    </div>
                </div>
                <div className="mp-cell sidebox-1">
                    <div className="card__text">
                        <h3 className="card--header">Weather</h3>
                        <div><p className = "hasAccount"><Link to ='/settings' className = "settingsLink">Settings</Link></p></div>
                    </div>
                </div>
                <div className="mp-cell searchbox">
                <div className="card__text">
                        <h3 className="card--header">Searchbox</h3>
                    </div>
                </div>
                <div className="mp-cell signup">
                <div className="card__text">
                        <button className="card--header" onClick={props.handleSignup}>Login/Signup</button>
                    </div>
                </div>
                <div className="mp-cell sidebox-2">
                    <div className="card--profile">
                        <img className = "img" src={props.urlImage1} alt="news-image1"/>
                    </div>
                    <div className="card__text">
                        <h5 className="card--header">{props.title}</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell sidebox-3">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image2"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell mainbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image3"/>
                    </div>
                    <div className="card__text">
                    <h1 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h1>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn-2">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell rbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image4"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell rbox-2">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image5"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell mdbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image6"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell mdbox-2">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image7"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell ticker">
                    <div className="mp-item">Ticker</div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default MainPage;