import React from 'react';
import '../../styles/MainPage.scss';
import Img from "../../img/test-img.jpg"

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
                    <div className="mp-item">Welcome</div>
                </div>
                <article className="mp-cell sidebox-1">
                    Weather
                </article>
                <div className="mp-cell searchbox">
                    <div className="mp-item">Searchbox</div>
                </div>
                <div className="mp-cell signup">
                    <div className="mp-item">Signup</div>
                </div>
                <article className="mp-cell sidebox-2">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                        <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </article>
                <article className="mp-cell sidebox-3">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </article>
                <article className="mp-cell mainbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h1 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h1>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </article>
                <article className="mp-cell rbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </article>
                <article className="mp-cell rbox-2">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </article>
                <article className="mp-cell mdbox-1">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </article>
                <article className="mp-cell mdbox-2">
                    <div className="card--profile">
                        <img className = "img" src={Img} alt="news-image"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div class="separator"></div>
                        <div class="card--footer"><button class="btn">Link</button></div>
                    </div>
                </article>
                <div className="mp-cell ticker">
                    <div className="mp-item">Ticker</div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default MainPage;