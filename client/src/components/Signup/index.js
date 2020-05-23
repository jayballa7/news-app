import React, { Component } from 'react'
import axios from 'axios';
import { Redirect ,Link} from "react-router-dom";
// import Members from "../Members";
import '../../styles/Signup.scss';
import '../../App.js';
import Header from '../Header.js';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			  email: '',
        password: '',
        loggedIn: false,
			  redirectTo: null

        }

    this.getUser = this.getUser.bind(this)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.getUser()
      }
      getUser() {
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
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new email/password
		axios.post('/api/signup', {
			email: this.state.email,
			password: this.state.password
		})
			.then(response => {
                console.log("***********************")
				console.log(response)
				if (!response.data.errmsg) {
                    console.log('successful signup');
                    
					this.setState({ //redirect to login page
						redirectTo: '/memberspage'
                    })
                    // window.location.replace("/memberspage");
				} else {
					console.log('email already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
    console.log("Redirecttttttt",this.state.redirectTo)
    if (this.state.redirectTo) {
        
        // return(<div>There is something to redirect</div>)
        return  <Redirect to={{ pathname: this.state.redirectTo }} />
        
    }
    else{
	return (

		<div className = "grid">
        <div className = "box1">
        <Header />
        </div>
        <div className = "box2">
        <div className = "wrapper">
            <form className="signup" action="" method="post">
                <h2 className = "signupHeading">Sign Up</h2>
                <div><label for="email">Enter your email: </label>
                <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange}/></div>
                {/* <div><label for="username">Choose a username:</label>
                <input type="text" name="username" id="username"/></div> */}
                <div><label for="password">Choose a password:</label>
                <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/></div>
                <div><a href="#" type = "submit" className="button1 bouncy" onClick={this.handleSubmit}>Sign Up</a></div>
                <div><p className = "hasAccount">Already have an account? <Link to ='/login' className = "loginLink">Login</Link></p></div>
            </form>
            </div>
            </div>
        </div>

		

	)
}
}
}

export default Signup