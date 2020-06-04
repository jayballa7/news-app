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
            // APIKey:'ea25551a0dd04cda9c50a68ac77e6940',
            APIKey: 'fb86349a9bcd480fbe62f2e9d5e07ab9',
            redirectTo: null
        }
        // this.logout = this.logout.bind(this)
        this.displayName=this.displayName.bind(this)
        this.fillPage=this.fillPage.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.handleSaveClick=this.handleSaveClick.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
    }
    componentDidMount(){
        this.displayName();
    }
    fillPage(){
        // var titles=[]
        // console.log("Fillpage")
        // console.log("loggedIN???",this.state.loggedIn,this.state.categories)
            if(this.state.loggedIn && this.state.categories){
                axios.get("/api/categories/"+this.state.email)
            .then(response=>{
                // response.data.map(article=>{
                //     titles.push(article.title)
                // })
                // console.log("Logged in res:",response.data);
                // var deep = cloneDeep(response.data)
                console.log('articles data', response.data)
                this.setState({
                    loggedInArticles:response.data
                })
                // },()=>{this.displayArticles()})
            })
        }
        else{
            axios.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey="+this.state.APIKey)
            .then(res=>{
                // console.log(res)
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

    handleSearch(data) {
        console.log('came back to members page');
        console.log('searching for', data);
        axios.get('/api/' + data).then(response => {
            console.log(response);
            this.setState({
                news: response.data,
                loggedInArticles: response.data
            })
        })
    }

    handleSaveClick(event){
        console.log("Title",event.target.dataset.title);
        console.log("URL",event.target.dataset.link);
        const savedArticle={
            email:this.state.email,
            link:event.target.dataset.link,
            saved:true,
            title: event.target.dataset.title
        }
        axios.post('/api/save',savedArticle)
        .then(response=>{
            console.log("Save button",response)
        })

    }

    handleSignup(){
        // console.log("Clicked Me")
        this.setState({
            redirectTo:'/signup'
        })
    }
    displayName(){
        // console.log("000000000000000")
        // console.log(this.state.loggedInArticles[0].title)
        axios.get("/api/user_data")
        .then(data=> {
            if(data.status===200){
                // console.log("OKKKKK")
                // console.log("#############################",data.data.id,data.data.categories)
                var isLogged = true;
                if(data.data.email===undefined){
                     isLogged=false;
                    //  console.log("USER IS NOT LOGGED")
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
        console.log("LOGGEDINARTI",this.loggedInArticles)
        // console.log(this.state.email)
        // console.log("LOGGED",this.state.news)
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        else{
            // console.log("!@!@")
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
            loggedIn={this.state.loggedIn}
            handleSaveClick={this.handleSaveClick}
            handleSearch={this.handleSearch}
           
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