import React from 'react';
import '../../styles/MainPage.scss';
// import '../../styles/UserCard.scss';
import Img from "../../img/test-img.jpg";
import '../../styles/Variables.scss';
import { Link} from "react-router-dom";

function MainPage(props) {
    console.log("propsss",props.loggedIn);
    if (props.loggedIn) {
        var loginButton = <div className="mp-cell signup">
        <div className="card__text">
        
         {/* <h3 className="card--header">Login/Signup</h3> */}

                {/* <button className="card--header" onClick={props.handleSignup}>Login/Signup</button> */}
                <div><p className = "hasAccount"><Link to ='/settings' className = "settingsLink">Settings</Link></p></div>
                {/* <button onClick={props.logout}>Logout</button> */}

            </div>
        </div>;
      } else {
        loginButton = <div className="mp-cell signup">
        <div className="card__text">
            <h3 className="card--header">Login/Signup</h3>

                <button className="card--header" onClick={props.handleSignup}>Login/Signup</button>
               
                {/* <button onClick={props.logout}>Logout</button> */}

            </div>
        </div>;
      }

    // var article
    // props.loggedInArticles.map(article={
    //     titles=article.title
    // })
    // console.log("titles",titles)
    // for(var i=0;i<props.loggedInArticles.length;i++){
    //     console.log("inside for",props.loggedInArticles[0].title)

    // }
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
                <div className="mp-cell settings">
                    <div className="card__text">
                        <h3 className="card--header"></h3>
                       
                    </div>
                </div>
                <div className="mp-cell searchbox">
                <div className="card__text">
                        <h3 className="card--header">Searchbox</h3>
                    </div>
                </div>
                {loginButton}
                
               
                {props.loggedInArticles.map((article,index)=>(
                <div className={"mp-cell sidebox-"+index}>
                    <div className="card--profile">
                        <img className = "img" src={article.urlToImage} alt="news-image1"/>
                    </div>
                       <div className="card__text">
                       <h5 className="card--header">{article.title}</h5>
                       <div className="separator"></div> 
                       <div className="card--footer"><button className="btn">Link</button></div>
                       <button className="btn" data-title={article.title} data-link={article.url} onClick={props.handleSaveClick} >Save</button>
                   </div>
                   </div>
                ))} 
                
                {props.news.map((article,index)=>(
                <div className={"mp-cell sidebox-"+index}>
                    <div className="card--profile">
                        <img className = "img" src={article.urlToImage} alt="news-image1"/>
                    </div>
                       <div className="card__text">
                       <h5 className="card--header">{article.title}</h5>
                       <div className="separator"></div>
                       <div className="card--footer"><button className="btn">Link</button></div>
                   </div>
                   </div>
                ))} 
                
                
                
                {/* <div className="mp-cell sidebox-3">
                    <div className="card--profile">

//                         <img className = "img" src={Img} alt="news-image"/>
//                     </div>
//                     <div className="card__text">
//                     <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
//                         <div class="separator"></div>
//                         <div class="card--footer"><button class="btn">Link</button></div>
      
                        <img className = "img" src={Img} alt="news-image2"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>

                    </div>
                </div> */}

                {/* {props.loggedInArticles.map((article,index)=>(
                <div className={"mp-cell mainbox-1"}>
                    <div className="card--profile">

//                         <img className = "img" src={Img} alt="news-image"/>
//                     </div>
//                     <div className="card__text">
//                     <h1 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h1>
//                         <div class="separator"></div>
//                         <div class="card--footer"><button class="btn-2">Link</button></div>

                        <img className = "img" src={Img} alt="news-image3"/>
                    </div>
                    <div className="card__text">
                <h1 className="card--header">{article.content}</h1>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn-2">Link</button></div>

                    </div>
                </div>
                ))}  */}

                {/* <div className="mp-cell sidebox-4">
                    <div className="card--profile">

//                         <img className = "img" src={Img} alt="news-image"/>
//                     </div>
//                     <div className="card__text">
//                     <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
//                         <div class="separator"></div>
//                         <div class="card--footer"><button class="btn">Link</button></div>

                        <img className = "img" src={Img} alt="news-image4"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>

                    </div>
                </div>
                <div className="mp-cell sidebox-5">
                    <div className="card--profile">

//                         <img className = "img" src={Img} alt="news-image"/>
//                     </div>
//                     <div className="card__text">
//                     <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
//                         <div class="separator"></div>
//                         <div class="card--footer"><button class="btn">Link</button></div>

                        <img className = "img" src={Img} alt="news-image5"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>

                    </div>
                </div>
                <div className="mp-cell sidebox-6">
                    <div className="card--profile">

//                         <img className = "img" src={Img} alt="news-image"/>
//                     </div>
//                     <div className="card__text">
//                     <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
//                         <div class="separator"></div>
//                         <div class="card--footer"><button class="btn">Link</button></div>

                        <img className = "img" src={Img} alt="news-image6"/>
                    </div>
                    <div className="card__text">
                    <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
                        <div className="separator"></div>
                        <div className="card--footer"><button className="btn">Link</button></div>

                    </div>
                </div>
                <div className="mp-cell sidebox-7">
                    <div className="card--profile">

//                         <img className = "img" src={Img} alt="news-image"/>
//                     </div>
//                     <div className="card__text">
//                     <h5 className="card--header">Lorem ipsum dolor sit amet, sed do eiusmod magna aliqua.</h5>
//                         <div class="separator"></div>
//                         <div class="card--footer"><button class="btn">Link</button></div>

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
                </div> */}
                 <div className="mp-cell ticker">
                    <div className="mp-item">Ticker</div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default MainPage;