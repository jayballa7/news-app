import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
class Login extends React.Component{
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loggedIn: false,
            redirectTo: null
        }
        this.getUserLogin = this.getUserLogin.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }
    componentDidMount() {
        this.getUserLogin()
      }
      getUserLogin() {
        axios.get('/api/user/').then(response => {
          console.log('Get user response: ')
          console.log(response.data)
          if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')
    
            this.setState({
              loggedIn: true,
              redirectTo: '/memberspage'
            //   username: response.data.user.username
            })
          } else {
            console.log('Get user: no user');
            this.setState({
              loggedIn: false,
            //   redirectTo: null
            //   username: null
            })
          }
        })
      }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            // [event.target.name]: event.target.value
            [name]:value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        console.log("#####",this.state.email);
        console.log(this.state.password)

        axios
            .post('/api/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    console.log("Yesss")
                    // update App.js state
                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     email: response.data.email
                    // })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/memberspage'
                    })
                    console.log("Redirect:",this.state.redirectTo)

                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
           
    }

    render(){
       
        if (this.state.redirectTo) {
            // return(<div>There is something to redirect</div>)
            return <Redirect to={{ pathname: this.state.redirectTo }} />
           
        }
        else{
        return (
            <div>
                <h1>Login Page</h1>
                <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="email">email</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                               
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
            </div>
        )
    }
}
}

export default Login;