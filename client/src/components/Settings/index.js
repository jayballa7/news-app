import React from 'react';
import '../../styles/Settings.scss';
import {Redirect, Link } from "react-router-dom";
import Img from "../../img/profile-img.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import '../../styles/Settings.scss';
// import { Link } from "react-router-dom";
// import Img from "../../img/profile-img.jpg";

// function Settings() {
//     return(
//         <div className="setting-container">
//             <div className="setting-page">
//                 <div className="setting-card">
//                     <div className="sp-cell profile-card">
//                         <div className="setting-card--profile">
//                             <img className = "img" src={Img} alt="profile-photo"/>
//                         </div>
//                         <div className="setting-card__text">
//                             <h1 className="setting-card--header">Username</h1>
//                             <div className = "notifications">
//                                 <label className="switch">
//                                 <input type="checkbox"/>
//                                 <span className="slider round"></span>
//                                 </label>
//                                 <p>Receive email notifications</p>
//                             </div>
//                             <hr></hr>
//                             <div className="setting-card--footer"><p><Link to= '/' className = "delete">Delete Account</Link></p></div>
//                             <div className="setting-card--footer"><p><Link to= '/login' className = "logout">Log Out</Link></p></div>
//                         </div>
//                     </div>

//                     <div className="categories">
//                         <div className="setting-card__text">
//                             <h3 className="setting-card--header">Choose 3 topics you are interested in:</h3>
//                             <hr></hr>
//                         <ul className = "checkbox">
//                             <li>
//                                 <label className="category">General
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>
//                             <li>
//                                 <label className="category">Politics
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label className="category">Art
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label className="category">Science/Tech
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label className="category">Entertainment
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label className="category">Sports
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label className="category">Business
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label className="category">Travel
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label className="category">Food
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label className="category">Style
//                                 <input type="checkbox"/>
//                                 <span className="checkmark"></span>
//                                 </label>
//                             </li>
//                             <input className = "save-categories" type="submit" value="Save"/>
//                         </ul>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

import  CheckBox  from '../CheckBox.js';
import TableData from '../TableData.js';
import TableSavedArticles from '../TableSavedArticles.js';
import axios from 'axios';

toast.configure();


class Settings extends React.Component{
  is_Mounted =false;
    constructor(props) {
        super(props)
        this.state = {
            history:[],
            suggestedArticles:[],
            savedArticles:[],
            historyString:'',
            flag:false,
            redirectTo: null,
            email:null,
            uid:'',
            category: [
                {id: 1, value: "General", isChecked: false},
                {id: 2, value: "Politics", isChecked: false},
                {id: 3, value: "Art", isChecked: false},
                {id: 4, value: "Science", isChecked: false},
                {id: 5, value: "Entertainment", isChecked: false},
                {id: 6, value: "Sports", isChecked: false},
                {id: 7, value: "Business", isChecked: false},
                {id: 8, value: "Health", isChecked: false},
                {id: 9, value: "Style", isChecked: false}

          ]
        }
        this.logout = this.logout.bind(this)
      }

      componentDidMount(){
        // this.retrieveData();
        // this.retrieveEmail();
        this.accountDetails();
        
      }

      accountDetails(){
          console.log("000000000000000")
          this.is_Mounted = true;
          // console.log(this.state.loggedInArticles[0].title)
          axios.get("/api/user_data")
          .then(data=> {
              if(data.status===200){
                  console.log("account details",data.data.id,data.data.email)
                  if (this.is_Mounted === true) {
                  this.setState({
                      uid:data.data.id,
                      email:data.data.email,
            
                    
                  },()=>{
                    this.retrieveData();
                    this.displaySuggested();
                    this.displaySavedArticles();
                    // this.retrieveEmail();
                  })
                }
              }

        })
        .catch(
            err=>console.log(err)
        )
        
        
      
      }

      retrieveData(){
        // axios.get('/api/categories/:email'+this.state.email)
        axios.get('/api/settings/'+this.state.email)
        .then(response=>{
          console.log("!!!!!",response.data.categories)
          

          let category = this.state.category
          console.log("CAT", category)
          // console.log("retrieveData", response.data.categories)
          // console.log("Data retrieved settings is:",response)
          if(response.data.categories){
          let arr=response.data.categories.split(',');
          // console.log("arr",arr)
          arr.forEach(ca=>{
            ca=ca.toString();
            console.log("ca",ca)
            category.forEach(ele => {
              if (ele.value.toLowerCase() === ca){
                console.log("YEPPPP")
                 ele.isChecked =  true
              }
           })
            this.setState({
              category: category,
              flag:response.data.notify
            },()=>console.log("after retrieve data",category))
          })
        }else{
          this.setState({
            category : [
              {id: 1, value: "General", isChecked: false},
              {id: 2, value: "Politics", isChecked: false},
              {id: 3, value: "Art", isChecked: false},
              {id: 4, value: "Science", isChecked: false},
              {id: 5, value: "Entertainment", isChecked: false},
              {id: 6, value: "Sports", isChecked: false},
              {id: 7, value: "Business", isChecked: false},
              {id: 8, value: "Health", isChecked: false},
              {id: 9, value: "Style", isChecked: false}

        ]
          })
        }
        })
      }
      
      displaySuggested(){
        
        axios.get('/api/user/suggested')
        .then(res=>{
          console.log("Suggested",res);
          this.setState({
            suggestedArticles:res.data
          })
          
        })
        
      }

      displaySavedArticles(){
        axios.get('/api/user/saved/'+this.state.email)
        .then(response=>{
          console.log("Saved Articles back",response);
          this.setState({
            savedArticles:response.data
          })
        })
      }

      handleSave(event){
        var saveId=event.target.dataset.id;
        console.log("handleSave:", saveId)
        axios.post('/api/user/'+saveId)
        .then(response=>{
          console.log("Saved cahnged",response)
        })
      }


      // retrieveEmail(){
      //   axios.get('/api/settings/notification/'+ this.state.email)
      //   .then(response=>{
      //     console.log(response);
      //     this.setState({
      //       flag:response.data.notify
      //     })
      //   })
      // }

      handleCheckChildElement = (event) => {
          
          console.log("@@@@"+event.target.checked)
        let category = this.state.category
        category.forEach(ele => {
           if (ele.value === event.target.value)
              ele.isChecked =  event.target.checked
        })
        this.setState({category: category})
        console.log("@@@@"+event.target.value)
      }
      
      handleSubmit(event){
        
          console.log("HELLO");
          for(var i=0;i<this.state.category.length;i++){
            if(this.state.category[i].isChecked===true){
           
              // if(this.state.category[i].isChecked===true && (this.state.history.includes(this.state.category[i])===false) ){
                // if(!this.state.history.includes(this.state.category[i])){
                  this.state.history.push(this.state.category[i].value);
            }
          // }
          }

          var string1=this.state.history.toString().toLowerCase()
          this.setState({
              historyString:string1
          },()=>{
            axios.put('/api/setcategory',
            {data: this.state.historyString}
            ).then(response=>{
             console.log(response);
            })
          })
          console.log(this.state.history.toString())
          toast.success("Saved successfully!");
          
        //   updateCategory(this.state.historyString);
      }

      handleNotify(event){
        //event.preventDefault();
        console.log(event.target);
        this.setState({
            flag: !this.state.flag,
          },()=>{
            axios.put('/api/setemail',
            {data: this.state.flag}
            ).then(response=>{
             console.log(response);
            })
          });
         
      }

      logout(event) {
        // event.preventDefault()
        // console.log('logging out')
        axios.post('/api/logout').then(response => {
          console.log("logout",response.data)
          //  if (response.msg === "logging out") {
          if (response.status === 200) {
            this.setState({
                email:null,
                uid:'',
              redirectTo:'/'
            },()=>console.log("redirectedd"))
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

      handleDelete(id){

        console.log("Reached handledelete")
        this.logout()

        axios.delete('/api/userdelete/'+id)
        .then(response=>{
            console.log("delete response is:",response)
            
            // this.setState({
            //     // uid:'',
            //     // email:'',
            //     redirectTo:'/'
            //   })
            
        })
        .catch(err=>console.log(err))
      
    }

    componentWillUnmount() {
      this.is_Mounted=false;
    }
    
      render() {
        if (this.state.redirectTo) {
          return <Redirect to={{ pathname: this.state.redirectTo }} />
         
      }
      else{
        console.log("notify",this.state.flag)
        return (
          <div className="App">
                <div className="setting-container">
            <div className="setting-page">
                <div className="setting-card">
                    <div className="sp-cell profile-card">
                        <div className="setting-card--profile">
                            <img className = "img" src={Img} alt="profile-photo"/>
                        </div>
                        <div className="setting-card__text">
                            <h1 className="setting-card--header">Username</h1>
                            <div className = "notifications">
                                <label className="switch">
                                <input type="checkbox" onChange={this.handleNotify.bind(this)} checked={this.state.flag}/>
                                <span className="slider round"></span>
                                </label>
                                <p>Receive email notifications</p>
                            </div>
                            <hr></hr>
                            <div className="setting-card--footer"><p><Link to= '/' className = "delete" onClick={()=>this.handleDelete(this.state.uid)}>Delete Account</Link></p></div>
                            <div className="setting-card--footer"><p><Link to= '/' className = "logout" onClick={this.logout}>Log Out</Link></p></div>
                            {/* <div className="setting-card--footer"><p><button className = "logout" onClick={this.logout.bind(this)}>Log Out</button></p></div> */}
                        </div>
                    </div>
                    <div className="categories">
                        <div className="setting-card__text">
                            <h3 className="setting-card--header">Choose 3 topics you are interested in:</h3>
                            <hr></hr>


            <ul>
            {
              this.state.category.map((cat, index) => {
                return (<CheckBox key={index} handleCheckChildElement={this.handleCheckChildElement}  {...cat} />
                    )
              })
            }
            </ul>
            <button type="submit" className = "save-categories" value="Save" onClick={this.handleSubmit.bind(this)}>Save</button>
{/* 
            <div className = "notifications">
                                <label className="switch">
                                <input type="checkbox" onChange={this.handleNotify.bind(this)} checked={this.state.flag}/>
                                <span className="slider round"></span>
                                </label>
                                <p>Receive email notifications</p>
            </div> */}
          </div>

          </div>
                    </div>
                </div>
            </div>
             {/* {this.displaySuggested} */}
             <TableData
             suggestedArticles={this.state.suggestedArticles}
             handleSave={this.handleSave}
             />
            
            
            <TableSavedArticles
            savedArticles={this.state.savedArticles}

            />

             

        </div>
        );
      }
    }
}

export default Settings;

