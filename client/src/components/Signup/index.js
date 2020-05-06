import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
// import Members from "../Members";
import '../../App.js';

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
		<div className="SignupForm">
			<h4>Sign up</h4>
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
						type="submit"
					>Sign up</button>
                    <button>Already a member? <a href="/login">Login</a></button>
				</div>
			</form>
		</div>

	)
}
}
}

export default Signup