import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.scss";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Members from "./components/Members";




function App() {
  
  return (
    
    <div className="App">
      {/* <Login /> */}
      {/* <Signup/> */}
      <Router >

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/memberspage" component={Members}/>
      <Route exact path="/" component={Signup} />

    </Router>

    </div>
  );
}

export default App;
