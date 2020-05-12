import React from 'react';
import Header from './Header.js';
import '../styles/Login.scss';
import {Link} from 'react-router-dom';

function Login() {
    return(
        <div className = "grid">
        <div className = "box1">
        <Header />
        </div>
        <div className = "box2">
        <div className = "wrapper">
            <form className="login" action="" method="post">
                <h2 className = "loginHeading">Login</h2>
                <div><label for="username">Username </label>
                <input type="text" name="username" id="username"/></div>
                <div><label for="password">Password </label>
                <input type="password" name="password" id="password"/></div>
                <div><a href="#" type = "submit" className="button1 bouncy">What's New?</a></div>
                <div><p className = "noAccount">Don't have an account? <Link to= '/signup' className = "signupLink">Sign Up</Link></p></div>
            </form>
            </div>
            </div>
        </div>
    
    )
}

export default Login;