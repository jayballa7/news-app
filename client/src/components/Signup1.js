import React from 'react';
import Header from './Header.js';
import '../styles/Signup.scss';
import {Link} from 'react-router-dom';

function Signup() {
    return(
        <div className = "grid">
        <div className = "box1">
        <Header />
        </div>
        <div className = "box2">
        <div className = "wrapper">
            <form className="signup" action="" method="post">
                <h2 className = "signupHeading">Sign Up</h2>
                <div><label for="email">Enter your email: </label>
                <input type="text" name="email" id="email"/></div>
                <div><label for="username">Choose a username:</label>
                <input type="text" name="username" id="username"/></div>
                <div><label for="password">Choose a password:</label>
                <input type="password" name="password" id="password"/></div>
                <div><a href="#" type = "submit" className="button1 bouncy">Sign Up</a></div>
                <div><p className = "hasAccount">Already have an account? <Link to ='/' className = "loginLink">Login</Link></p></div>
            </form>
            </div>
            </div>
        </div>
    
    )
}

// export default Signup;