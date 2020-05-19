import React from 'react';
import  CheckBox  from '../CheckBox.js';
import axios from 'axios';

class Settings extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            history:[],
            historyString:'',
            flag:false,
            category: [
                {id: 1, value: "General", isChecked: false},
                {id: 2, value: "Politics", isChecked: false},
                {id: 3, value: "Art", isChecked: false},
                {id: 4, value: "Science and Tech", isChecked: false},
                {id: 5, value: "Entertainment", isChecked: false},
                {id: 6, value: "Sports", isChecked: false},
                {id: 7, value: "Business", isChecked: false},
                {id: 8, value: "Health", isChecked: false},
                {id: 9, value: "Style", isChecked: false}

          ]
        }
      }
    
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
                this.state.history.push(this.state.category[i].value);
            }
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
    
      render() {
        console.log("notify",this.state.flag)
        return (
          <div className="App">
          <h1> Check and Uncheck All Example </h1>
            <ul>
            {
              this.state.category.map((cat, index) => {
                return (<CheckBox key={index} handleCheckChildElement={this.handleCheckChildElement}  {...cat} />
                    )
              })
            }
            </ul>
            <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>

            <div className = "notifications">
                                <label className="switch">
                                <input type="checkbox" onChange={this.handleNotify.bind(this)} checked={this.state.flag}/>
                                <span className="slider round"></span>
                                </label>
                                <p>Receive email notifications</p>
            </div>
          </div>
        );
      }
}

export default Settings;