import React from 'react';
import axios from 'axios';
import { Link,Redirect } from "react-router-dom";

class Members extends React.Component{

    constructor() {
        super()
        this.state={
            email:'',
            uid:'',
            redirectTo: null
        }
        this.logout = this.logout.bind(this)
        this.displayName=this.displayName.bind(this)
    }
    componentDidMount(){
        this.displayName();
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/api/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.setState({
                email:'',
                uid:'',
              redirectTo:'/'
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    handleDelete(id){

        console.log("Reached handledelete")

        axios.delete('/api/userdelete/'+id)
        .then(response=>{
            console.log("delete response is:",response)
            this.setState({
                // uid:'',
                // email:'',
                redirectTo:'/'
              },()=>console.log("State set"))
            // this.logout()
        })
        .catch(err=>console.log(err))
      
    }
   
    displayName(){
        console.log("000000000000000")
        axios.get("/api/user_data")
        .then(data=> {
            if(data.status===200){
                console.log("OKKKKK")
                this.setState({
                    uid:data.data.id,
                    email:data.data.email
                })
            }
        console.log("Members!",data)
        // console.log("useremail:",data.data.email);
        console.log("userdbID:",data.data.id);
    //    userid=data.data.id;
          
        // $(".member-name").text(data.email);
      })
      .catch(
          err=>console.log(err)
      )
      
      
    }
   
    render() {  
        console.log("this.uid is:")
        // if(this.state.uid!==''){
        //     this.displayName();
        // }
        
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
        <h2>Welcome {this.state.email}<span className="member-name"></span></h2>
                    {/* <button onClick={()=>this.handleDelete(this.state.uid)}>DELETE</button> */}
                    <Link onClick={()=>this.handleDelete(this.state.uid)} to="/" >DELETE</Link>
                </div>
                </div>
                </div>
                </div>
          
        )
        }
    }
}

export default Members;

