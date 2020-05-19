import React from 'react';
import '../styles/Header.scss';
import { Link} from "react-router-dom";
import '../styles/Variables.scss';

function Header(props) {
    return(
        <div className="container">
            <div className="mainpage"></div>
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
                        {/* <h3 className="card--header">Weather</h3> */}
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
                </div>
                </div>
    )
}


export default Header;