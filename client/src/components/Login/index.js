import React from 'react';
import axios from 'axios';
import { Link,Redirect } from "react-router-dom";
import Header from '../Header.js';
import '../../styles/Login.scss';
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
            <div className = "grid">
            <div className = "box1">
            <Header />
            </div>
            <div className = "box2">
            <div className = "wrapper">
                <form className="login" action="" method="post">
                    <h2 className = "loginHeading">Login</h2>
                    <div><label for="email">Email  </label>
                    <input type="text" name="email" id="email" value={this.state.email}  onChange={this.handleChange}/></div>
                    {/* <div><label for="username">Username </label>
                    <input type="text" name="username" id="username"/></div> */}
                    <div><label for="password">Password </label>
                    <input type="password" name="password" id="password" value={this.state.password}  onChange={this.handleChange}/></div>
                    <div><a href="#" type = "submit" className="button1 bouncy"   onClick={this.handleSubmit}>What's New?</a></div>
                    <div><p className = "noAccount">Don't have an account? <Link to= '/signup' className = "signupLink">Sign Up</Link></p></div>
                </form>
                </div>
                </div>
            </div>




        )
    }
}
}

export default Login;