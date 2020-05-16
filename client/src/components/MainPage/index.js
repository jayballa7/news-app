import React from 'react';
import '../../styles/MainPage.scss';
import Img from "../../img/test-img.jpg";

function MainPage() {
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
                        <h3 className="card--header">Welcome</h3>
                    </div>
                </div>
                <div className="mp-cell sidebox-1">
                    <div className="card__text">
                        <h3 className="card--header">Weather</h3>
                    </div>
                </div>
                <div className="mp-cell searchbox">
                <div className="card__text">
                        <h3 className="card--header">Searchbox</h3>
                    </div>
                </div>
                <div className="mp-cell signup">
                <div className="card__text">
                        <h3 className="card--header">Login/Signup</h3>
                    </div>
                </div>
                <div className="mp-cell sidebox-2">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                        <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button class="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell sidebox-3">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell mainbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h1 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h1>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn-2">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell rbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell rbox-2">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell mdbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </div>
                <div className="mp-cell mdbox-2">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
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