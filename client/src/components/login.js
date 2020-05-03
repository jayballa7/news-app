import React from 'react';
import Header from './Header.js';

function Login() {
    return(
        <div>
            <Header />
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-8 offset-md-2">
                        <form>
                            <div className="form-group">
                                <label for="loginEmail">Email address</label>
                                <input type="email" class="form-control" id="loginEmail" aria-describedby="email" />
                            </div>
                            <div className="form-group">
                                <label for="loginPassword">Password</label>
                                <input type="password" class="form-control" id="loginPassword" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;