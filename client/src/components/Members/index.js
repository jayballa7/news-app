import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Members extends React.Component{

    constructor() {
        super()
        this.state={
            redirectTo: null
        }
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/api/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.setState({
              redirectTo:'/'
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }
   
    // axios.get("/api/user_data").then(function(data) {
    //     console.log("Members!",data)
    //     // $(".member-name").text(data.email);
    //   });
    render() {  
        if (this.state.redirectTo) {
            // return(<div>There is something to redirect</div>)
            return <Redirect to={{ pathname: this.state.redirectTo }} />
           
        }
        else{
        console.log("Inside members123")
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="/logout" onClick={this.logout}>
                            Logout
                        </a>
                        </div>
                </div>
                </nav>
                <div className="container">
                <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Welcome <span className="member-name"></span></h2>
                </div>
                </div>
                </div>
                </div>
          
        )
        }
    }
}

export default Members;

