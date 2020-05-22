import React from 'react';
import axios from 'axios';
import { Link,Redirect } from "react-router-dom";
import '../../styles/MainPage.scss';
// import Signup from '../Signup';
import '../../App.css';
import MainPage from '../MainPage';
import Img from "../../img/test-img.jpg";
import cloneDeep from 'lodash/cloneDeep';
import Header from '../Header.js'
class Members extends React.Component{
    constructor() {
        super()
        this.state={
            email:null,
            uid:'',
            categories:false,
            news:[],
            loggedInArticles:[],
            loggedIn:false,
            APIKey:'90cf1942d9234f7f9f34095818861d62',
            // APIKey:'75d12e4aed504da3878657856f888232',
            redirectTo: null
        }
        // this.logout = this.logout.bind(this)
        this.displayName=this.displayName.bind(this)
        this.fillPage=this.fillPage.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }
    componentDidMount(){
        this.displayName();
    }
    fillPage(){
        var titles=[]
        console.log("Fillpage")
        console.log("loggedIN???",this.state.loggedIn,this.state.categories)
            if(this.state.loggedIn && this.state.categories){
                axios.get("/api/categories/"+this.state.email)
            // axios.get("https://newsapi.org/v2/sources?apiKey="+this.state.APIKey)
            .then(response=>{
                // response.data.map(article=>{
                //     titles.push(article.title)
                // })
                console.log("Logged in res:",response.data);
                // var deep = cloneDeep(response.data)
                this.setState({
                    loggedInArticles:response.data
                })
                // },()=>{this.displayArticles()})
            })
        }
        else{
            axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey="+this.state.APIKey)
            .then(res=>{
                console.log(res)
                this.setState({
                    // news:res.data.articles
                    news:res.data.articles
                })
                // },()=>{this.displayCommonArticles()})
            })
        }
    }
    // displayArticles(){
    //     console.log("This is being hit");
    //     console.log(this.state.loggedInArticles[0]);
    //     return(
    //         <div>
    //             <h1>Hi there!</h1>
    //              {this.state.loggedInArticles.map(article=>(
    //                 <MainPage
    //                     title={article.title}
    //                     urlImage={article.urlToImage}
    //                     />
    //              ))}
    //     </div>
    //     )
    // }
    // displayCommonArticles(){
    //     this.state.news.map(art=>(
    //         <MainPage/>
    //     ))
    // }
    // logout(event) {
    //     event.preventDefault()
    //     // console.log('logging out')
    //     axios.post('/api/logout').then(response => {
    //       console.log(response.data)
    //       if (response.status === 200) {
    //         this.setState({
    //             email:null,
    //             uid:'',
    //           redirectTo:'/'
    //         })
    //       }
    //     }).catch(error => {
    //         console.log('Logout error')
    //     })
    //   }
    // handleDelete(id){
    //     console.log("Reached handledelete")
    //     axios.delete('/api/userdelete/'+id)
    //     .then(response=>{
    //         console.log("delete response is:",response)
    //         this.setState({
    //             // uid:'',
    //             // email:'',
    //             redirectTo:'/'
    //           },()=>console.log("State set"))
    //         // this.logout()
    //     })
    //     .catch(err=>console.log(err))
    // }
    handleSignup(){
        console.log("Clicked Me")
        this.setState({
            redirectTo:'/signup'
        })
    }
    displayName(){
        console.log("000000000000000")
        // console.log(this.state.loggedInArticles[0].title)
        axios.get("/api/user_data")
        .then(data=> {
            if(data.status===200){
                console.log("OKKKKK")
                console.log("#############################",data.data.id,data.data.categories)
                var isLogged = true;
                if(data.data.email===undefined){
                     isLogged=false;
                     console.log("USER IS NOT LOGGED")
                }
                var catego;
                if(data.data.categories!==null){
                    catego=true;
                }
                this.setState({
                    uid:data.data.id,
                    email:data.data.email,
                    loggedIn:isLogged,
                    categories:catego
                })
            }
            this.fillPage();
        // console.log("Members!",data)
        // console.log("useremail:",data.data.email);
        // console.log("userdbID:",data.data.id);
    //    userid=data.data.id;
        // $(".member-name").text(data.email);
      })
      .catch(
          err=>console.log(err)
      )
    }
    render() {  
        console.log("Redir",this.state.redirectTo)
        console.log("LOGGEDINARTI",this.state.news)
        // console.log(this.state.email)
        // console.log("LOGGED",this.state.news)
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        else{
            console.log("!@!@")
            // console.log(typeof(this.state.loggedInArticles[0]))
            // var deep = _.head(this.state.loggedInArticles);
            // console.log(deep)
        return(
            <div>
            <MainPage
            handleSignup={this.handleSignup}
            email={this.state.email}
            loggedInArticles={this.state.loggedInArticles}
            news={this.state.news}
          //   title={this.state.loggedInArticles[0]}
            />
          {/* {
          this.state.loggedInArticles.map((article, index)=>(
              <MainPage
              title={article.title}
              />
          ))} */}
      </div>
        )
        }
    }
}
export default Members;

